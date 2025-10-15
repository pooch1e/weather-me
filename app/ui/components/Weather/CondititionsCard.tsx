import { mapCodeToCondition } from '@/app/lib/weather/utils/mapWeatherCodeToCondition';
interface ConditionsProps {
  conditions: number;
}
export default function ConditionsCard({ conditions }: ConditionsProps) {
  const condition = mapCodeToCondition(conditions);
  return (
    <div className="bg-gray-900 border border-green-400 rounded-2xl p-6 shadow-lg">
      <div className="text-center">
        <p className="text-lg font-light text-green-400 tracking-wide">{condition.description}</p>
      </div>
    </div>
  );
}
