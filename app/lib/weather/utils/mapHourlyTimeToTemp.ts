interface CombinedTime {
  time: string;
  temperature: number;
}
export const mapHourlyTimeToTemp = (
  time: string[],
  temp: number[]
): CombinedTime[] => {
  return time.map((timeValue, index) => {
    return {
      time: timeValue,
      temperature: temp[index],
    };
  });
};
