import { describe, expect, test } from 'vitest';
import { mapHourlyTimeToTemp } from '../app/lib/weather/utils/mapHourlyTimeToTemp';

describe('test map hour to time', () => {
  test('when passed empty arrays, returns empty array', () => {
    const time: string[] = [];
    const temp: number[] = [];
    const actual = mapHourlyTimeToTemp(time, temp);
    const expected: [] = [];
    expect(actual).toEqual(expected);
  });
  test('maps time to temp correctly', () => {
    const time = ['2025-10-12T00:00', '2025-10-12T01:00'];
    const temp = [15.2, 14.8];
    const actual = mapHourlyTimeToTemp(time, temp);
    const expected = [
      { time: '2025-10-12T00:00', temperature: 15.2 },
      { time: '2025-10-12T01:00', temperature: 14.8 },
    ];
    expect(actual).toEqual(expected);
  });
  test('maps correctly with different array sizes', () => {
    const time = ['2025-10-12T00:00'];
    const temp = [15.2, 14.8];
    const actual = mapHourlyTimeToTemp(time, temp);
    const expected = [{ time: '2025-10-12T00:00', temperature: 15.2 }];
    expect(actual).toEqual(expected);
  });
});
