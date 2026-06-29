import { isFuture } from "./index";

describe('isFuture', () => {
  it('should check if the date is in the future', () => {
    const date = new Date(2099, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it('should handle invalid dates', () => {
    const date = new Date('Invalid Date');
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
