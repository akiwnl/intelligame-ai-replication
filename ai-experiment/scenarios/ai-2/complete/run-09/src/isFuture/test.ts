import { isFuture } from "./index";

describe("isFuture", () => {
  const mockedNow = new Date(2022, 0, 1).getTime();
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => mockedNow);
  });
  afterAll(() => {
    (Date.now as jest.Mock).mockRestore();
  });

  it("returns true for a date after now", () => {
    const future = new Date(2022, 0, 2);
    expect(isFuture(future)).toBe(true);
  });

  it("returns false for a date before now", () => {
    const past = new Date(2021, 11, 31);
    expect(isFuture(past)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const now = new Date(mockedNow);
    expect(isFuture(now)).toBe(false);
  });

  it("accepts timestamp and string", () => {
    const futureTs = new Date(2022, 5, 1).getTime();
    expect(isFuture(futureTs)).toBe(true);
    expect(isFuture(futureTs.toString())).toBe(true);
  });

  it("handles Invalid Date as false", () => {
    expect(isFuture("invalid")).toBe(false);
  });
});
