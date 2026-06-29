import { isPast } from "./index";

describe('isPast', () => {
  it('should check if the date is in the past', () => {
    const date = new Date(1900, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it('should handle invalid dates', () => {
    const date = new Date('Invalid Date');
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
