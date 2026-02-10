import 'leaflet';

declare module 'leaflet' {
  namespace GeometryUtil {
    function geodesicArea(latLngs: { lat: number; lng: number }[]): number;
  }
}

declare module 'leaflet/dist/leaflet.css';
