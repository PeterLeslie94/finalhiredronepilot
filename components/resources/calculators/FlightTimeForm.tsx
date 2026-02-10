'use client';

import { useState, useMemo } from 'react';
import RangeSlider from '@/components/resources/RangeSlider';
import CalculatorResult from '@/components/resources/CalculatorResult';
import { drones, Drone } from '@/data/equipment';
import { Clock, Battery, Gauge, Camera, Route } from 'lucide-react';

type WeatherCondition = 'calm' | 'moderate' | 'challenging';

interface WeatherOption {
  value: WeatherCondition;
  label: string;
  multiplier: number;
  description: string;
}

const weatherOptions: WeatherOption[] = [
  { value: 'calm', label: 'Calm Conditions', multiplier: 1.0, description: 'Wind <5 m/s' },
  { value: 'moderate', label: 'Moderate Wind', multiplier: 1.15, description: 'Wind 5-10 m/s' },
  { value: 'challenging', label: 'Challenging', multiplier: 1.3, description: 'Wind 10-12 m/s' },
];

// Extract flight time in minutes from drone specs
function getDroneFlightMinutes(drone: Drone): number {
  const match = drone.specs.flightTime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 45;
}

// Get coverage efficiency based on drone type
function getDroneCoverageEfficiency(drone: Drone): number {
  switch (drone.type) {
    case 'fixed-wing':
      return 1.8; // Fixed-wing covers more area
    case 'vtol':
      return 1.5; // VTOL is efficient but not as much as pure fixed-wing
    case 'multi-rotor':
    default:
      return 1.0; // Base efficiency for multi-rotors
  }
}

export default function FlightTimeForm() {
  // Form state
  const [siteArea, setSiteArea] = useState(5);
  const [selectedDroneId, setSelectedDroneId] = useState(drones[0].id);
  const [altitude, setAltitude] = useState(80);
  const [overlap, setOverlap] = useState(75);
  const [weather, setWeather] = useState<WeatherCondition>('calm');

  // Get selected drone
  const selectedDrone = useMemo(
    () => drones.find((d) => d.id === selectedDroneId) || drones[0],
    [selectedDroneId]
  );

  // Calculate results
  const results = useMemo(() => {
    const droneFlightMinutes = getDroneFlightMinutes(selectedDrone);
    const droneEfficiency = getDroneCoverageEfficiency(selectedDrone);
    const weatherMultiplier = weatherOptions.find((w) => w.value === weather)?.multiplier || 1.0;

    // Base coverage rate: 2.5 hectares per 25 minutes at 75% overlap, 80m altitude
    // This equates to about 6 hectares per hour for standard multi-rotor
    const baseRateHaPerHour = 6;

    // Altitude factor: Higher altitude = faster coverage (wider swath)
    // At 120m we cover ~1.5x more than at 50m
    const altitudeFactor = 0.7 + (altitude - 50) * (0.8 / 70); // 0.7 at 50m, 1.5 at 120m

    // Overlap factor: Higher overlap = slower coverage
    // At 60% overlap, factor is 1.25; at 85% overlap, factor is 0.6
    const overlapFactor = 1.6 - (overlap / 100);

    // Calculate adjusted coverage rate
    const coverageRateHaPerHour =
      baseRateHaPerHour * altitudeFactor * overlapFactor * droneEfficiency;

    // Calculate total flight time (in hours first, then convert)
    const rawFlightTimeHours = siteArea / coverageRateHaPerHour;

    // Apply weather multiplier
    const adjustedFlightTimeHours = rawFlightTimeHours * weatherMultiplier;
    const totalFlightMinutes = Math.ceil(adjustedFlightTimeHours * 60);

    // Calculate batteries needed
    // Use 80% of battery for safety margin
    const usableBatteryMinutes = droneFlightMinutes * 0.8;
    const batteriesNeeded = Math.ceil(totalFlightMinutes / usableBatteryMinutes);
    const totalBatteries = batteriesNeeded + 1; // +1 spare

    // Estimate images captured
    // GSD and footprint calculation (simplified)
    // At 80m with typical sensor, GSD ~2cm, footprint ~80x60m
    // Adjust footprint based on altitude
    const footprintWidth = (altitude / 80) * 80; // meters
    const footprintHeight = (altitude / 80) * 60; // meters
    const footprintArea = footprintWidth * footprintHeight; // sq meters

    // Effective coverage per image considering overlap
    const overlapDecimal = overlap / 100;
    const effectiveCoveragePerImage = footprintArea * (1 - overlapDecimal) * (1 - overlapDecimal);

    // Total images
    const siteAreaSqm = siteArea * 10000; // hectares to sq meters
    const estimatedImages = Math.ceil(siteAreaSqm / effectiveCoveragePerImage);

    // Flight passes (simplified - based on site width assumption)
    // Assume roughly square site for simplicity
    const siteWidthM = Math.sqrt(siteAreaSqm);
    const swathWidth = footprintWidth * (1 - overlapDecimal);
    const flightPasses = Math.ceil(siteWidthM / swathWidth);

    return {
      totalFlightMinutes,
      totalBatteries,
      coverageRateHaPerHour: coverageRateHaPerHour.toFixed(1),
      estimatedImages,
      flightPasses,
      droneFlightMinutes,
    };
  }, [siteArea, selectedDrone, altitude, overlap, weather]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left Column - Form */}
      <div className="bg-white rounded-xl border-2 border-border p-6 md:p-8">
        <h2 className="text-xl font-bold text-teal mb-6">Configure Your Survey</h2>

        {/* Site Area Slider */}
        <RangeSlider
          label="Site Area"
          value={siteArea}
          min={0.5}
          max={50}
          step={0.5}
          unit=" ha"
          onChange={setSiteArea}
          formatValue={(v) => `${v} hectares`}
          helpText="The total area to be surveyed"
        />

        {/* Drone Model Dropdown */}
        <div className="mb-6">
          <label htmlFor="drone-select" className="block text-sm font-semibold text-teal mb-2">
            Drone Model
          </label>
          <select
            id="drone-select"
            value={selectedDroneId}
            onChange={(e) => setSelectedDroneId(e.target.value)}
            className="calc-select"
          >
            {drones.map((drone) => (
              <option key={drone.id} value={drone.id}>
                {drone.name} ({drone.specs.flightTime})
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-text-secondary">
            {selectedDrone.typeLabel} - {selectedDrone.tagline}
          </p>
        </div>

        {/* Flight Altitude Slider */}
        <RangeSlider
          label="Flight Altitude"
          value={altitude}
          min={50}
          max={120}
          step={5}
          unit="m"
          onChange={setAltitude}
          formatValue={(v) => `${v}m`}
          helpText="Higher altitude = faster coverage but lower resolution"
        />

        {/* Image Overlap Slider */}
        <RangeSlider
          label="Image Overlap"
          value={overlap}
          min={60}
          max={85}
          step={5}
          unit="%"
          onChange={setOverlap}
          formatValue={(v) => `${v}%`}
          helpText="Higher overlap = more detail but longer flight time"
        />

        {/* Weather Conditions Dropdown */}
        <div className="mb-6">
          <label htmlFor="weather-select" className="block text-sm font-semibold text-teal mb-2">
            Weather Conditions
          </label>
          <select
            id="weather-select"
            value={weather}
            onChange={(e) => setWeather(e.target.value as WeatherCondition)}
            className="calc-select"
          >
            {weatherOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.description})
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-text-secondary">
            Wind increases flight time due to reduced efficiency and stability requirements
          </p>
        </div>

        {/* Selected Drone Specs Card */}
        <div className="bg-background-alt rounded-lg p-4 border border-border">
          <h3 className="text-sm font-semibold text-teal mb-3">Selected Drone Specifications</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-text-secondary">{selectedDrone.specs.flightTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-gold" />
              <span className="text-text-secondary">{selectedDrone.specs.windResistance}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-text-secondary">{selectedDrone.specs.accuracy}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-text-secondary">{selectedDrone.specs.range}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Results */}
      <div>
        <CalculatorResult
          title="Flight Time Estimate"
          results={[
            {
              label: 'Estimated Total Flight Time',
              value: `${results.totalFlightMinutes} minutes`,
              highlight: true,
              subtext: `Based on ${results.droneFlightMinutes} min battery life`,
            },
            {
              label: 'Batteries Required',
              value: `${results.totalBatteries} batteries`,
              subtext: 'Includes 1 spare for safety',
            },
            {
              label: 'Coverage Rate',
              value: `${results.coverageRateHaPerHour} ha/hour`,
              subtext: 'Adjusted for altitude and overlap',
            },
            {
              label: 'Estimated Images',
              value: results.estimatedImages.toLocaleString(),
              subtext: 'Approximate captures required',
            },
            {
              label: 'Recommended Flight Passes',
              value: `${results.flightPasses} passes`,
              subtext: 'Parallel flight lines',
            },
          ]}
          disclaimer="These estimates are indicative only and based on ideal conditions. Actual flight times may vary depending on terrain complexity, obstacles, regulatory requirements, and specific site conditions. Contact us for accurate project planning."
          showQuoteCTA={true}
        />

        {/* Quick Tips */}
        <div className="mt-6 bg-background-alt rounded-xl p-5 border border-border">
          <h3 className="text-sm font-semibold text-teal mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Quick Tips
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">-</span>
              Fixed-wing drones are ideal for areas over 20 hectares
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">-</span>
              75% overlap is recommended for most topographic surveys
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">-</span>
              Always plan for spare batteries and weather delays
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
