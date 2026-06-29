import { isPast } from "./index";

describe("isPast", () => {
  const mockedNow = new Date(2022, 0, 1).getTime();
  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => mockedNow);
  });
  afterAll(() => {
    (Date.now as jest.Mock).mockRestore();
  });

  it("returns true for a date before now", () => {
    const past = new Date(2021, 11, 31);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for a date after now", () => {
    const future = new Date(2022, 0, 2);
    expect(isPast(future)).toBe(false);
  });

  it("returns false for exactly now", () => {
    const now = new Date(mockedNow);
    expect(isPast(now)).toBe(false);
  });

  it("accepts timestamp and string", () => {
    const pastTs = new Date(2021, 5, 1).getTime();
    expect(isPast(pastTs)).toBe(true);
    expect(isPast(pastTs.toString())).toBe(true);
  });

  it("handles Invalid Date as false", () => {
    expect(isPast("bad")).toBe(false);
  });
});
