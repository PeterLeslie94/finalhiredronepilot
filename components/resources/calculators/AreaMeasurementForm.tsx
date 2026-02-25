'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Copy, Check, Trash2, MapPin, Layers, Pencil, RotateCcw } from 'lucide-react';
import Link from 'next/link';

// Types for Leaflet
interface LatLng {
  lat: number;
  lng: number;
  distanceTo: (other: LatLng) => number;
}

interface LeafletMap {
  setView: (center: [number, number], zoom: number) => void;
  remove: () => void;
  on: (event: string, handler: () => void) => void;
  invalidateSize: () => void;
}

interface LeafletPolygon {
  setLatLngs: (latlngs: LatLng[]) => void;
  addTo: (map: LeafletMap) => void;
  remove: () => void;
  getLatLngs: () => LatLng[][];
}

interface LeafletMarker {
  addTo: (map: LeafletMap) => void;
  remove: () => void;
  setLatLng: (latlng: LatLng) => void;
}

interface Measurements {
  area: number;
  perimeter: number;
  vertices: number;
}

// Custom hook for copy to clipboard
function useCopyToClipboard() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 2000);
  }, []);

  return { copiedValue, copy };
}

// Copy button component
function CopyButton({ value, label }: { value: string; label: string }) {
  const { copiedValue, copy } = useCopyToClipboard();
  const isCopied = copiedValue === value;

  return (
    <button
      onClick={() => copy(value)}
      className="p-1.5 rounded-md hover:bg-teal/10 transition-colors group"
      title={`Copy ${label}`}
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-text-secondary group-hover:text-teal transition-colors" />
      )}
    </button>
  );
}

export default function AreaMeasurementForm() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const polygonRef = useRef<LeafletPolygon | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const LRef = useRef<typeof import('leaflet') | null>(null);

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<LatLng[]>([]);
  const [measurements, setMeasurements] = useState<Measurements | null>(null);
  const [currentLayer, setCurrentLayer] = useState<'street' | 'satellite'>('street');

  // Format number with commas
  const formatNumber = (num: number, decimals = 0): string => {
    return num.toLocaleString('en-GB', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  // Calculate geodesic area using Leaflet's GeometryUtil
  const calculateArea = useCallback((latlngs: LatLng[]): number => {
    if (!LRef.current || latlngs.length < 3) return 0;
    const L = LRef.current;
    // Use GeometryUtil for geodesic area calculation
    if (L.GeometryUtil && typeof L.GeometryUtil.geodesicArea === 'function') {
      return Math.abs(L.GeometryUtil.geodesicArea(latlngs));
    }
    // Fallback: Shoelace formula for planar approximation
    let area = 0;
    const n = latlngs.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += latlngs[i].lng * latlngs[j].lat;
      area -= latlngs[j].lng * latlngs[i].lat;
    }
    // Convert to approximate square meters (very rough)
    return Math.abs(area / 2) * 111320 * 111320;
  }, []);

  // Calculate perimeter
  const calculatePerimeter = useCallback((latlngs: LatLng[]): number => {
    if (latlngs.length < 2) return 0;
    let perimeter = 0;
    for (let i = 0; i < latlngs.length; i++) {
      const next = (i + 1) % latlngs.length;
      perimeter += latlngs[i].distanceTo(latlngs[next]);
    }
    return perimeter;
  }, []);

  // Update measurements
  const updateMeasurements = useCallback((latlngs: LatLng[]) => {
    if (latlngs.length < 3) {
      setMeasurements(null);
      return;
    }
    const area = calculateArea(latlngs);
    const perimeter = calculatePerimeter(latlngs);
    setMeasurements({
      area,
      perimeter,
      vertices: latlngs.length,
    });
  }, [calculateArea, calculatePerimeter]);

  // Initialize map
  useEffect(() => {
    let mounted = true;

    const initMap = async () => {
      if (!mapContainerRef.current || mapRef.current) return;

      try {
        // Dynamic import of Leaflet
        const L = await import('leaflet');
        // @ts-expect-error - CSS import is handled by bundler at runtime
        await import('leaflet/dist/leaflet.css');

        // Fix default marker icons
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        if (!mounted || !mapContainerRef.current) return;

        LRef.current = L;

        // Create map centered on UK
        const map = L.map(mapContainerRef.current, {
          center: [54.5, -3],
          zoom: 6,
          zoomControl: true,
        });

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        mapRef.current = map as unknown as LeafletMap;
        setIsMapLoaded(true);

        // Handle map click for polygon drawing
        map.on('click', (e: L.LeafletMouseEvent) => {
          if (!isDrawing) return;

          const newPoint = e.latlng as LatLng;
          setPoints(prev => {
            const newPoints = [...prev, newPoint];
            return newPoints;
          });
        });

      } catch (error) {
        console.error('Failed to load map:', error);
      }
    };

    initMap();

    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Handle drawing mode and point updates
  useEffect(() => {
    const map = mapRef.current;
    const L = LRef.current;
    if (!map || !L || !isMapLoaded) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add markers for each point
    points.forEach((point, index) => {
      const isFirst = index === 0;
      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="w-4 h-4 rounded-full ${isFirst ? 'bg-gold border-2 border-white' : 'bg-teal border-2 border-white'} shadow-lg flex items-center justify-center text-xs text-white font-bold">${index + 1}</div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker([point.lat, point.lng], { icon: markerIcon }).addTo(map as unknown as L.Map);
      markersRef.current.push(marker as unknown as LeafletMarker);
    });

    // Update polygon
    if (polygonRef.current) {
      polygonRef.current.remove();
      polygonRef.current = null;
    }

    if (points.length >= 3) {
      const polygon = L.polygon(
        points.map(p => [p.lat, p.lng] as L.LatLngTuple),
        {
          color: '#f5b800',
          weight: 3,
          fillColor: '#f5b800',
          fillOpacity: 0.2,
        }
      ).addTo(map as unknown as L.Map);
      polygonRef.current = polygon as unknown as LeafletPolygon;

      updateMeasurements(points);
    } else {
      setMeasurements(null);
    }

    // Draw line between points if we have 2+ points
    if (points.length >= 2 && points.length < 3) {
      L.polyline(
        points.map(p => [p.lat, p.lng] as L.LatLngTuple),
        { color: '#f5b800', weight: 3, dashArray: '5, 10' }
      ).addTo(map as unknown as L.Map);
    }

  }, [points, isMapLoaded, updateMeasurements]);

  // Handle click events for drawing
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isMapLoaded) return;

    const handleClick = (e: { latlng: LatLng }) => {
      if (!isDrawing) return;
      const newPoint = e.latlng;
      setPoints(prev => [...prev, newPoint]);
    };

    (map as unknown as L.Map).on('click', handleClick);

    return () => {
      (map as unknown as L.Map).off('click', handleClick);
    };
  }, [isDrawing, isMapLoaded]);

  // Start drawing
  const startDrawing = () => {
    setIsDrawing(true);
    setPoints([]);
    setMeasurements(null);
  };

  // Complete polygon (when clicking near first point or button)
  const completePolygon = () => {
    if (points.length < 3) return;
    setIsDrawing(false);
  };

  // Reset/clear
  const resetDrawing = () => {
    setIsDrawing(false);
    setPoints([]);
    setMeasurements(null);

    // Clear markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Clear polygon
    if (polygonRef.current) {
      polygonRef.current.remove();
      polygonRef.current = null;
    }
  };

  // Toggle map layer
  const toggleLayer = () => {
    const map = mapRef.current;
    const L = LRef.current;
    if (!map || !L) return;

    const newLayer = currentLayer === 'street' ? 'satellite' : 'street';
    setCurrentLayer(newLayer);

    // Remove existing tile layers
    (map as unknown as L.Map).eachLayer((layer: L.Layer) => {
      if (layer instanceof L.TileLayer) {
        layer.remove();
      }
    });

    // Add new tile layer
    if (newLayer === 'satellite') {
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19,
      }).addTo(map as unknown as L.Map);
    } else {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map as unknown as L.Map);
    }
  };

  // Copy all measurements
  const copyAllMeasurements = () => {
    if (!measurements) return;
    const text = `Site Area Measurements
Area: ${formatNumber(measurements.area)} m² (${formatNumber(measurements.area / 10000, 2)} hectares / ${formatNumber(measurements.area / 4046.86, 2)} acres)
Perimeter: ${formatNumber(measurements.perimeter)} m${measurements.perimeter >= 1000 ? ` (${formatNumber(measurements.perimeter / 1000, 2)} km)` : ''}
Vertices: ${measurements.vertices}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Map Section - 60% */}
      <div className="lg:col-span-3">
        <div className="bg-white border-2 border-border rounded-xl overflow-hidden">
          {/* Map Controls */}
          <div className="flex flex-wrap items-center gap-2 p-3 border-b border-border bg-background-alt">
            {!isDrawing ? (
              <button
                onClick={startDrawing}
                className="btn btn-primary text-sm py-2 px-4"
              >
                <Pencil className="w-4 h-4 mr-2" />
                Draw Polygon
              </button>
            ) : (
              <>
                <button
                  onClick={completePolygon}
                  disabled={points.length < 3}
                  className="btn btn-primary text-sm py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Complete ({points.length} points)
                </button>
                <button
                  onClick={() => setPoints(prev => prev.slice(0, -1))}
                  disabled={points.length === 0}
                  className="btn btn-outline text-sm py-2 px-4 disabled:opacity-50"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Undo
                </button>
              </>
            )}
            <button
              onClick={resetDrawing}
              className="btn btn-outline text-sm py-2 px-4"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </button>
            <button
              onClick={toggleLayer}
              className="btn btn-outline text-sm py-2 px-4 ml-auto"
            >
              <Layers className="w-4 h-4 mr-2" />
              {currentLayer === 'street' ? 'Satellite' : 'Street'}
            </button>
          </div>

          {/* Map Container */}
          <div
            ref={mapContainerRef}
            className="w-full h-[400px] md:h-[500px] bg-gray-100"
            style={{ cursor: isDrawing ? 'crosshair' : 'grab' }}
          >
            {!isMapLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal"></div>
              </div>
            )}
          </div>

          {/* Drawing Instructions */}
          {isDrawing && (
            <div className="p-3 bg-gold/10 border-t border-gold/20">
              <p className="text-sm text-teal flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>
                  <strong>Click on the map</strong> to add points. Add at least 3 points, then click &quot;Complete&quot; to finish.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Results Sidebar - 40% */}
      <div className="lg:col-span-2 space-y-4">
        {/* Measurements Card */}
        <div className="bg-white border-2 border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-teal">Measurements</h3>
            {measurements && (
              <button
                onClick={copyAllMeasurements}
                className="text-sm text-gold hover:text-gold-dark font-medium flex items-center gap-1"
              >
                <Copy className="w-4 h-4" />
                Copy All
              </button>
            )}
          </div>

          {measurements ? (
            <div className="space-y-6">
              {/* Area */}
              <div>
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  Area
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gold/10 rounded-lg">
                    <div>
                      <p className="text-2xl font-bold text-gold">
                        {formatNumber(measurements.area)} m²
                      </p>
                    </div>
                    <CopyButton
                      value={`${formatNumber(measurements.area)} m²`}
                      label="area in square meters"
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                    <div>
                      <p className="text-lg font-semibold text-teal">
                        {formatNumber(measurements.area / 10000, 2)} hectares
                      </p>
                    </div>
                    <CopyButton
                      value={`${formatNumber(measurements.area / 10000, 2)} hectares`}
                      label="area in hectares"
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                    <div>
                      <p className="text-lg font-semibold text-teal">
                        {formatNumber(measurements.area / 4046.86, 2)} acres
                      </p>
                    </div>
                    <CopyButton
                      value={`${formatNumber(measurements.area / 4046.86, 2)} acres`}
                      label="area in acres"
                    />
                  </div>
                </div>
              </div>

              {/* Perimeter */}
              <div>
                <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  Perimeter
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                    <div>
                      <p className="text-lg font-semibold text-teal">
                        {formatNumber(measurements.perimeter)} m
                      </p>
                    </div>
                    <CopyButton
                      value={`${formatNumber(measurements.perimeter)} m`}
                      label="perimeter in meters"
                    />
                  </div>
                  {measurements.perimeter >= 1000 && (
                    <div className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                      <div>
                        <p className="text-lg font-semibold text-teal">
                          {formatNumber(measurements.perimeter / 1000, 2)} km
                        </p>
                      </div>
                      <CopyButton
                        value={`${formatNumber(measurements.perimeter / 1000, 2)} km`}
                        label="perimeter in kilometers"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Vertices */}
              <div className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                <div>
                  <p className="text-sm text-text-secondary">Vertices</p>
                  <p className="text-lg font-semibold text-teal">
                    {measurements.vertices} points
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-teal" />
              </div>
              <p className="text-text-secondary mb-2">No area measured yet</p>
              <p className="text-sm text-text-muted">
                Click &quot;Draw Polygon&quot; and add at least 3 points on the map to measure an area.
              </p>
            </div>
          )}
        </div>

        {/* CTA Card */}
        <div className="bg-teal rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-2">
            Know Your Site Area?
          </h3>
          <p className="text-white/70 text-sm mb-4">
            Use our Survey Cost Estimator to get an instant price estimate for your drone survey project.
          </p>
          <Link
            href="/resources/calculators/survey-cost-estimator"
            className="btn btn-primary w-full justify-center"
          >
            Calculate Survey Cost
          </Link>
        </div>
      </div>
    </div>
  );
}
