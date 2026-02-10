'use client';

import { useState, useMemo } from 'react';
import RangeSlider from '@/components/resources/RangeSlider';
import CalculatorResult from '@/components/resources/CalculatorResult';

// Types
interface ROIInputs {
  siteArea: number;
  traditionalQuote: number;
  surveysPerYear: number;
  riskLevel: 'low' | 'medium' | 'high';
  currentMethod: 'total-station' | 'gps-survey' | 'manual-measurement';
}

interface ROIResults {
  droneEstimate: number;
  costSavingsPerSurvey: number;
  annualCostSavings: number;
  timeSavingsPerSurvey: number;
  safetyValue: number;
  roiPercentage: number;
  traditionalTime: number;
  droneTime: number;
}

// Risk level multipliers and labels
const riskLevels = {
  low: { multiplier: 1.0, label: 'Low (Offices, Open Land)', safetyBase: 500 },
  medium: { multiplier: 1.2, label: 'Medium (Construction Sites)', safetyBase: 500 },
  high: { multiplier: 1.5, label: 'High (Industrial, Hazardous)', safetyBase: 500 },
};

// Survey method labels
const surveyMethods = {
  'total-station': 'Total Station Survey',
  'gps-survey': 'GPS Survey',
  'manual-measurement': 'Manual Measurement',
};

// Tiered pricing calculation
function calculateDroneEstimate(hectares: number): number {
  let cost = 0;
  let remainingArea = hectares;

  // Tier 1: 0-5 hectares at £80/ha
  if (remainingArea > 0) {
    const tier1Area = Math.min(remainingArea, 5);
    cost += tier1Area * 80;
    remainingArea -= tier1Area;
  }

  // Tier 2: 5-20 hectares at £60/ha
  if (remainingArea > 0) {
    const tier2Area = Math.min(remainingArea, 15); // 20 - 5 = 15
    cost += tier2Area * 60;
    remainingArea -= tier2Area;
  }

  // Tier 3: 20-50 hectares at £45/ha
  if (remainingArea > 0) {
    const tier3Area = Math.min(remainingArea, 30); // 50 - 20 = 30
    cost += tier3Area * 45;
    remainingArea -= tier3Area;
  }

  // Tier 4: 50+ hectares at £35/ha
  if (remainingArea > 0) {
    cost += remainingArea * 35;
  }

  return cost;
}

// Time calculation (traditional: ~5 days per 10 hectares, drone: ~1 day per 10 hectares)
function calculateTime(hectares: number, isDrone: boolean): number {
  const daysPerTenHectares = isDrone ? 1 : 5;
  return Math.ceil((hectares / 10) * daysPerTenHectares);
}

// Comparison Bar Component
function ComparisonBar({
  label,
  value,
  maxValue,
  color,
  formatValue,
}: {
  label: string;
  value: number;
  maxValue: number;
  color: 'traditional' | 'drone';
  formatValue: (val: number) => string;
}) {
  const percentage = Math.min((value / maxValue) * 100, 100);
  const barColor = color === 'traditional' ? 'bg-gray-400' : 'bg-gold';

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="text-sm font-bold text-teal">{formatValue(value)}</span>
      </div>
      <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-lg transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function ROIForm() {
  const [inputs, setInputs] = useState<ROIInputs>({
    siteArea: 10,
    traditionalQuote: 5000,
    surveysPerYear: 2,
    riskLevel: 'medium',
    currentMethod: 'total-station',
  });

  // Calculate results
  const results = useMemo<ROIResults>(() => {
    const droneEstimate = calculateDroneEstimate(inputs.siteArea);
    const traditionalTime = calculateTime(inputs.siteArea, false);
    const droneTime = calculateTime(inputs.siteArea, true);
    const timeSavingsPerSurvey = traditionalTime - droneTime;
    const costSavingsPerSurvey = inputs.traditionalQuote - droneEstimate;
    const annualCostSavings = costSavingsPerSurvey * inputs.surveysPerYear;
    const safetyValue = riskLevels[inputs.riskLevel].multiplier * riskLevels[inputs.riskLevel].safetyBase;
    const roiPercentage = droneEstimate > 0
      ? ((annualCostSavings + safetyValue) / droneEstimate) * 100
      : 0;

    return {
      droneEstimate,
      costSavingsPerSurvey,
      annualCostSavings,
      timeSavingsPerSurvey,
      safetyValue,
      roiPercentage,
      traditionalTime,
      droneTime,
    };
  }, [inputs]);

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Percentage difference for comparison
  const savingsPercentage = inputs.traditionalQuote > 0
    ? Math.round(((inputs.traditionalQuote - results.droneEstimate) / inputs.traditionalQuote) * 100)
    : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white rounded-xl border-2 border-border p-6 md:p-8">
        <h2 className="text-xl font-bold text-teal mb-6">Your Survey Details</h2>

        {/* Site Area Slider */}
        <RangeSlider
          label="Site Area"
          value={inputs.siteArea}
          min={1}
          max={100}
          step={1}
          unit=" ha"
          onChange={(value) => setInputs({ ...inputs, siteArea: value })}
          helpText="The total area of your survey site in hectares"
        />

        {/* Traditional Survey Quote */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-teal mb-2">
            Traditional Survey Quote (GBP)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary font-medium">
              £
            </span>
            <input
              type="number"
              value={inputs.traditionalQuote}
              onChange={(e) => setInputs({ ...inputs, traditionalQuote: Number(e.target.value) || 0 })}
              min={0}
              max={100000}
              className="calc-input pl-8"
              placeholder="5000"
            />
          </div>
          <p className="mt-2 text-xs text-text-secondary">
            Enter the quote you received for traditional surveying
          </p>
        </div>

        {/* Surveys Per Year Slider */}
        <RangeSlider
          label="Surveys Per Year"
          value={inputs.surveysPerYear}
          min={1}
          max={12}
          step={1}
          onChange={(value) => setInputs({ ...inputs, surveysPerYear: value })}
          helpText="How many times per year do you need this site surveyed?"
        />

        {/* Risk Level Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-teal mb-2">
            Risk/Safety Level
          </label>
          <select
            value={inputs.riskLevel}
            onChange={(e) => setInputs({ ...inputs, riskLevel: e.target.value as ROIInputs['riskLevel'] })}
            className="calc-select"
          >
            {Object.entries(riskLevels).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-text-secondary">
            Higher risk environments benefit more from drone surveys
          </p>
        </div>

        {/* Current Survey Method Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-teal mb-2">
            Current Survey Method
          </label>
          <select
            value={inputs.currentMethod}
            onChange={(e) => setInputs({ ...inputs, currentMethod: e.target.value as ROIInputs['currentMethod'] })}
            className="calc-select"
          >
            {Object.entries(surveyMethods).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        <CalculatorResult
          title="Your Potential Savings"
          results={[
            {
              label: 'Annual Cost Savings',
              value: formatCurrency(Math.max(results.annualCostSavings, 0)),
              highlight: true,
              subtext: `Based on ${inputs.surveysPerYear} survey${inputs.surveysPerYear > 1 ? 's' : ''} per year`,
            },
            {
              label: 'Per Survey Savings',
              value: formatCurrency(Math.max(results.costSavingsPerSurvey, 0)),
            },
            {
              label: 'Drone Survey Estimate',
              value: formatCurrency(results.droneEstimate),
            },
            {
              label: 'Time Savings Per Survey',
              value: `${results.timeSavingsPerSurvey} day${results.timeSavingsPerSurvey !== 1 ? 's' : ''}`,
              subtext: `${results.droneTime} day vs ${results.traditionalTime} days traditional`,
            },
            {
              label: 'Safety Value',
              value: formatCurrency(results.safetyValue),
              subtext: 'Reduced on-site personnel risk',
            },
            {
              label: 'Annual ROI',
              value: `${Math.round(results.roiPercentage)}%`,
              subtext: 'Return on investment',
            },
          ]}
          disclaimer="This is an indicative estimate only. Actual costs may vary based on site complexity, access requirements, and deliverables needed. Contact us for an accurate quote."
        />

        {/* Visual Comparison */}
        <div className="bg-white rounded-xl border-2 border-border p-6">
          <h3 className="text-lg font-bold text-teal mb-4">Cost Comparison</h3>

          <ComparisonBar
            label="Traditional Survey"
            value={inputs.traditionalQuote}
            maxValue={Math.max(inputs.traditionalQuote, results.droneEstimate)}
            color="traditional"
            formatValue={formatCurrency}
          />

          <ComparisonBar
            label="Drone Survey"
            value={results.droneEstimate}
            maxValue={Math.max(inputs.traditionalQuote, results.droneEstimate)}
            color="drone"
            formatValue={formatCurrency}
          />

          {savingsPercentage > 0 && (
            <div className="mt-4 p-4 bg-gold/10 rounded-lg text-center">
              <p className="text-sm text-text-secondary mb-1">You could save</p>
              <p className="text-3xl font-bold text-gold">{savingsPercentage}%</p>
              <p className="text-sm text-text-secondary">per survey with drone technology</p>
            </div>
          )}

          {savingsPercentage <= 0 && (
            <div className="mt-4 p-4 bg-teal/10 rounded-lg text-center">
              <p className="text-sm text-text-secondary">
                Based on your inputs, traditional surveying may be more cost-effective.
                However, drone surveys still offer time savings and safety benefits.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
