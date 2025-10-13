import { mapCodeToCondition } from '@/app/lib/weather/utils/mapWeatherCodeToCondition';
interface ConditionsProps {
  conditions: number;
}
export default function ConditionsCard({ conditions }: ConditionsProps) {
  const condition = mapCodeToCondition(conditions);
  return (
    <div className="border-1 flex h-8 rounded-t-sm p-1 justify-center">
      <div className="text-xs tracking-wide">
        <p>{condition.description}</p>
      </div>
    </div>
  );
}
