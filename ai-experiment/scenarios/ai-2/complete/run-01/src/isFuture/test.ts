import { isFuture } from "./index";

describe("isFuture", () => {
  const realNow = Date.now;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns true for dates after mocked now", () => {
    jest.spyOn(Date, "now").mockReturnValue(new Date(2020, 0, 1).getTime());
    expect(isFuture(new Date(2020, 0, 2))).toBe(true);
  });

  it("returns false for past dates", () => {
    jest.spyOn(Date, "now").mockReturnValue(new Date(2020, 0, 2).getTime());
    expect(isFuture(new Date(2020, 0, 1))).toBe(false);
  });

  it("handles timestamps", () => {
    jest.spyOn(Date, "now").mockReturnValue(0);
    expect(isFuture(1000)).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isFuture("bad")).toBe(false);
  });
});
