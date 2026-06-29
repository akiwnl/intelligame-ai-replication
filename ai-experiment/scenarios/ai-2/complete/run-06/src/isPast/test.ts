import { isPast } } from "./index";

describe("isPast", () => {
  const fixedNow = new Date(2022, 5, 15).getTime();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedNow);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns true for a date before now", () => {
    const past = new Date(2022, 5, 14);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a date after now", () => {
    const future = new Date(2022, 5, 16);
    expect(isPast(future)).toBe(false);
  });

  it("returns false for the exact current time", () => {
    const now = new Date(fixedNow);
    expect(isPast(now)).toBe(false);
  });

  it("handles timestamp", () => {
    const ts = fixedNow - 5000;
    expect(isPast(ts)).toBe(true);
  });

  it("returns false for Invalid Date", () => {
    expect(isPast(new Date(NaN))).toBe(false);
  });
});
