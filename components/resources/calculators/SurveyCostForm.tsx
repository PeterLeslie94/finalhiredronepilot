'use client';

import { useState, useMemo } from 'react';
import RangeSlider from '@/components/resources/RangeSlider';
import CalculatorResult from '@/components/resources/CalculatorResult';

interface Deliverable {
  id: string;
  name: string;
  percentage: number;
  included: boolean;
  description: string;
}

type TerrainComplexity = 'flat' | 'moderate' | 'complex';
type TurnaroundTime = 'standard' | 'express';

const terrainMultipliers: Record<TerrainComplexity, number> = {
  flat: 1.0,
  moderate: 1.3,
  complex: 1.6,
};

const terrainLabels: Record<TerrainComplexity, string> = {
  flat: 'Flat/Open',
  moderate: 'Moderate/Mixed',
  complex: 'Complex/Urban',
};

export default function SurveyCostForm() {
  const [siteArea, setSiteArea] = useState(5);
  const [terrain, setTerrain] = useState<TerrainComplexity>('flat');
  const [turnaround, setTurnaround] = useState<TurnaroundTime>('standard');
  const [needsGCP, setNeedsGCP] = useState(false);
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    { id: 'orthomosaic', name: 'Orthomosaic', percentage: 0, included: true, description: 'High-resolution aerial map stitched from drone imagery' },
    { id: 'dsm', name: 'Digital Surface Model (DSM)', percentage: 15, included: false, description: 'Elevation model including buildings, vegetation, and structures' },
    { id: 'dtm', name: 'Digital Terrain Model (DTM)', percentage: 20, included: false, description: 'Bare-earth elevation model with features removed' },
    { id: 'contours', name: 'Contour Lines', percentage: 10, included: false, description: 'Topographic contour lines at specified intervals' },
    { id: '3d-model', name: '3D Textured Model', percentage: 35, included: false, description: 'Photorealistic 3D reconstruction of the site' },
    { id: 'point-cloud', name: 'Point Cloud', percentage: 25, included: false, description: 'Dense 3D point cloud data for CAD integration' },
  ]);

  const toggleDeliverable = (id: string) => {
    setDeliverables((prev) =>
      prev.map((d) =>
        d.id === id && d.id !== 'orthomosaic' ? { ...d, included: !d.included } : d
      )
    );
  };

  const calculateBasePrice = (hectares: number): number => {
    let total = 0;
    let remaining = hectares;

    // First 5 hectares at £80/ha
    if (remaining > 0) {
      const tier1 = Math.min(remaining, 5);
      total += tier1 * 80;
      remaining -= tier1;
    }

    // 5-20 hectares at £60/ha
    if (remaining > 0) {
      const tier2 = Math.min(remaining, 15);
      total += tier2 * 60;
      remaining -= tier2;
    }

    // 20-50 hectares at £45/ha
    if (remaining > 0) {
      const tier3 = Math.min(remaining, 30);
      total += tier3 * 45;
      remaining -= tier3;
    }

    // 50+ hectares at £35/ha
    if (remaining > 0) {
      total += remaining * 35;
    }

    return total;
  };

  const estimate = useMemo(() => {
    // Calculate base price
    let price = calculateBasePrice(siteArea);

    // Apply terrain multiplier
    price *= terrainMultipliers[terrain];

    // Add deliverables percentage
    const deliverablesPercentage = deliverables
      .filter((d) => d.included)
      .reduce((sum, d) => sum + d.percentage, 0);
    price *= 1 + deliverablesPercentage / 100;

    // Add express surcharge
    if (turnaround === 'express') {
      price *= 1.3;
    }

    // Add GCP fee
    if (needsGCP) {
      price += 150;
    }

    // Calculate range (±15%)
    const low = Math.round(price * 0.85);
    const high = Math.round(price * 1.15);

    return { low, high, midpoint: Math.round(price) };
  }, [siteArea, terrain, deliverables, turnaround, needsGCP]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const selectedDeliverables = deliverables.filter((d) => d.included);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Form Column */}
      <div className="space-y-8">
        {/* Site Area Slider */}
        <div className="calc-card">
          <RangeSlider
            label="Site Area"
            value={siteArea}
            min={0.5}
            max={100}
            step={0.5}
            unit=" hectares"
            onChange={setSiteArea}
            formatValue={(v) => `${v} hectares`}
            helpText="The total area to be surveyed. Larger sites benefit from volume discounts."
          />
        </div>

        {/* Terrain Complexity */}
        <div className="calc-card">
          <label className="block text-sm font-semibold text-teal mb-3">
            Terrain Complexity
          </label>
          <select
            value={terrain}
            onChange={(e) => setTerrain(e.target.value as TerrainComplexity)}
            className="calc-select"
          >
            <option value="flat">Flat/Open (1.0x)</option>
            <option value="moderate">Moderate/Mixed (1.3x)</option>
            <option value="complex">Complex/Urban (1.6x)</option>
          </select>
          <p className="mt-2 text-xs text-text-secondary">
            Complex terrain with obstacles, buildings, or vegetation requires more flight time and processing.
          </p>
        </div>

        {/* Deliverables */}
        <div className="calc-card">
          <label className="block text-sm font-semibold text-teal mb-3">
            Deliverables
          </label>
          <div className="space-y-3">
            {deliverables.map((deliverable) => (
              <label
                key={deliverable.id}
                className={`calc-checkbox ${deliverable.included ? 'checked' : ''} ${
                  deliverable.id === 'orthomosaic' ? 'opacity-80' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={deliverable.included}
                  onChange={() => toggleDeliverable(deliverable.id)}
                  disabled={deliverable.id === 'orthomosaic'}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">
                      {deliverable.name}
                    </span>
                    <span className="text-sm text-gold font-semibold">
                      {deliverable.id === 'orthomosaic'
                        ? 'Included'
                        : `+${deliverable.percentage}%`}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    {deliverable.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Turnaround Time */}
        <div className="calc-card">
          <label className="block text-sm font-semibold text-teal mb-3">
            Turnaround Time
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTurnaround('standard')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                turnaround === 'standard'
                  ? 'border-gold bg-gold/5'
                  : 'border-border hover:border-gold/50'
              }`}
            >
              <div className="font-semibold text-text-primary">Standard</div>
              <div className="text-sm text-text-secondary">5-7 working days</div>
              <div className="text-sm text-gold font-semibold mt-1">No extra cost</div>
            </button>
            <button
              type="button"
              onClick={() => setTurnaround('express')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                turnaround === 'express'
                  ? 'border-gold bg-gold/5'
                  : 'border-border hover:border-gold/50'
              }`}
            >
              <div className="font-semibold text-text-primary">Express</div>
              <div className="text-sm text-text-secondary">48 hours</div>
              <div className="text-sm text-gold font-semibold mt-1">+30%</div>
            </button>
          </div>
        </div>

        {/* Ground Control Points */}
        <div className="calc-card">
          <label className="block text-sm font-semibold text-teal mb-3">
            Ground Control Points (GCPs)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setNeedsGCP(false)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                !needsGCP
                  ? 'border-gold bg-gold/5'
                  : 'border-border hover:border-gold/50'
              }`}
            >
              <div className="font-semibold text-text-primary">No GCPs</div>
              <div className="text-sm text-text-secondary">Relative accuracy</div>
            </button>
            <button
              type="button"
              onClick={() => setNeedsGCP(true)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                needsGCP
                  ? 'border-gold bg-gold/5'
                  : 'border-border hover:border-gold/50'
              }`}
            >
              <div className="font-semibold text-text-primary">With GCPs</div>
              <div className="text-sm text-text-secondary">Survey-grade accuracy</div>
              <div className="text-sm text-gold font-semibold mt-1">+£150</div>
            </button>
          </div>
          <p className="mt-3 text-xs text-text-secondary">
            Ground Control Points are surveyed markers that improve absolute accuracy to survey-grade levels (typically ±2-3cm).
          </p>
        </div>
      </div>

      {/* Results Column */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <CalculatorResult
          title="Estimated Cost"
          results={[
            {
              label: 'Price Range',
              value: `${formatCurrency(estimate.low)} - ${formatCurrency(estimate.high)}`,
              highlight: true,
              subtext: 'Indicative pricing based on your selections',
            },
            {
              label: 'Site Area',
              value: `${siteArea} hectares`,
            },
            {
              label: 'Terrain',
              value: terrainLabels[terrain],
            },
            {
              label: 'Deliverables',
              value: selectedDeliverables.map((d) => d.name).join(', '),
            },
            {
              label: 'Turnaround',
              value: turnaround === 'express' ? 'Express (48hr)' : 'Standard (5-7 days)',
            },
            {
              label: 'Ground Control Points',
              value: needsGCP ? 'Yes (+£150)' : 'No',
            },
          ]}
          disclaimer="This estimate is for guidance only. Final pricing depends on site access, flight restrictions, weather conditions, and specific project requirements. Request a formal quote for accurate pricing."
          showQuoteCTA={true}
        />
      </div>
    </div>
  );
}
