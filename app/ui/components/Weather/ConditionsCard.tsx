import { mapCodeToCondition } from '@/app/lib/weather/utils/mapWeatherCodeToCondition';
interface ConditionsProps {
  conditions: number;
}
export default function ConditionsCard({ conditions }: ConditionsProps) {
  const condition = mapCodeToCondition(conditions);
  return (
    <div className="bg-gray-900 border text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
      <div className="text-center">
        <p className="text-base sm:text-lg font-light text-white tracking-wide">{condition.description}</p>
      </div>
    </div>
  );
}
