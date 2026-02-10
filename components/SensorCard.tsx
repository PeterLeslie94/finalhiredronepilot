import { Scan, Thermometer, Camera, ShieldCheck, ListChecks, Timer } from 'lucide-react';
import type { Sensor } from '@/data/equipment';

interface SensorCardProps {
  sensor: Sensor;
}

const iconMap = {
  scan: Scan,
  thermometer: Thermometer,
  camera: Camera,
  shield: ShieldCheck,
  'list-checks': ListChecks,
  timer: Timer,
};

export default function SensorCard({ sensor }: SensorCardProps) {
  const Icon = iconMap[sensor.icon as keyof typeof iconMap] || Camera;

  return (
    <div className="group bg-teal-dark border-2 border-gold/20 rounded-2xl p-6 transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10">
      {/* Icon */}
      <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
        <Icon className="w-7 h-7 text-gold" />
      </div>

      {/* Title */}
      <h4 className="text-white font-bold text-xl mb-2">{sensor.name}</h4>

      {sensor.models.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {sensor.models.map((model) => (
            <span
              key={model}
              className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
            >
              {model}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-white/70 text-sm mb-4 leading-relaxed">
        {sensor.description}
      </p>

      {sensor.applications.length > 0 && (
        <div>
          <h5 className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
            Key Benefits
          </h5>
          <ul className="space-y-1.5">
            {sensor.applications.map((app) => (
              <li key={app} className="flex items-start gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {app}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
