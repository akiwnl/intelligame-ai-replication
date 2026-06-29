import { isPast } from "./index";

describe("isPast", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("detects past date", () => {
    jest.spyOn(Date, "now").mockReturnValue(new Date(2020, 5, 10).getTime());
    expect(isPast(new Date(2020, 5, 9))).toBe(true);
  });

  it("future date returns false", () => {
    jest.spyOn(Date, "now").mockReturnValue(new Date(2020, 5, 1).getTime());
    expect(isPast(new Date(2020, 5, 2))).toBe(false);
  });

  it("handles string input", () => {
    jest.spyOn(Date, "now").mockReturnValue(Date.UTC(2021, 0, 1));
    expect(isPast("2020-12-31T23:59:59.999Z")).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isPast("invalid")).toBe(false);
  });
});
