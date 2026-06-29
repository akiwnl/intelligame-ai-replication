import { getDate } from "./index";

describe('getDate', () => {
  it('should get the day of the month', () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it('should handle invalid dates', () => {
    const date = new Date('Invalid Date');
    const result = getDate(date);
    expect(result).toBeNaN();
  });
});
