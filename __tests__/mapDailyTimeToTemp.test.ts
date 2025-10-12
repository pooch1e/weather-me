import { describe, test, expect } from 'vitest';
import { mapDailyTimeToTemp } from '@/app/lib/utils/mapDailyTimeToTemp';

describe('map Daily Time to Temperatures', () => {
  test('when passed empty arrays, returns empty array', () => {
    const emptyTime: [] = [];
    const emptyMinTemp: [] = [];
    const emptyMaxTemp: [] = [];
    const actual = mapDailyTimeToTemp(emptyTime, emptyMinTemp, emptyMaxTemp);
    const expected: [] = [];
    expect(actual).toEqual(expected);
  });
  test('maps time to temp correctly via index', () => {
    const time = ['2025-10-12T00:00', '2025-10-12T01:00'];
    const minTemp = [8.9, 12.5];
    const maxTemp = [16, 17.5];
    const actual = mapDailyTimeToTemp(time, minTemp, maxTemp);
    const expected = [
      { time: '2025-10-12T00:00', minTemp: 8.9, maxTemp: 16 },
      { time: '2025-10-12T01:00', minTemp: 12.5, maxTemp: 17.5 },
    ];

    expect(actual).toEqual(expected);
  });
});
