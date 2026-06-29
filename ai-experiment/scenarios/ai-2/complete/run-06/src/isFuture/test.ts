import { isFuture } from "./index";

describe("isFuture", () => {
  const fixedNow = new Date(2022, 0, 1).getTime();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedNow);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns true for a date after now", () => {
    const future = new Date(2022, 0, 2);
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a date before now", () => {
    const past = new Date(2021, 11, 31);
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for the exact current time", () => {
    const now = new Date(fixedNow);
    expect(isFuture(now)).toBe(false);
  });

  it("handles timestamp", () => {
    const ts = fixedNow + 1000;
    expect(isFuture(ts)).toBe(true);
  });

  it("returns false for Invalid Date", () => {
    expect(isFuture(new Date(NaN))).toBe(false);
  });
});
