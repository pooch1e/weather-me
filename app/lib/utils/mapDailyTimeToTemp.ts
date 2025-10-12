interface DailyCombinedTime {
  time: string;
  minTemp: number;
  maxTemp: number;
}
export const mapDailyTimeToTemp = (
  time: string[],
  minTemp: number[],
  maxTemp: number[]
): DailyCombinedTime[] => {
  return time.map((timeValue, index) => {
    return {
      time: timeValue,
      minTemp: minTemp[index],
      maxTemp: maxTemp[index],
    };
  });
};
