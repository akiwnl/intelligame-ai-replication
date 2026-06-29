import { isEqual } from "./index";

describe('isEqual', () => {
  it('should check if the dates are equal', () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateToCompare = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date, dateToCompare);
    expect(result).toBe(true);
  });

  it('should handle invalid dates', () => {
    const date = new Date('Invalid Date');
    const dateToCompare = new Date('Invalid Date');
    const result = isEqual(date, dateToCompare);
    expect(result).toBe(false);
  });
});
