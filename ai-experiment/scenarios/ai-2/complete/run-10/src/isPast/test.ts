import { isPast } from "./index";

describe("isPast", () => {
  const now = new Date("2022-01-01T00:00:00Z").getTime();

  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => now);
  });

  afterAll(() => {
    (Date.now as any).mockRestore();
  });

  it("returns true for dates before mocked now", () => {
    expect(isPast(new Date("2021-12-31T23:59:59Z"))).toBe(true);
  });

  it("returns false for dates after mocked now", () => {
    expect(isPast(new Date("2022-01-02T00:00:00Z"))).toBe(false);
  });

  it("returns false for the exact mocked now", () => {
    expect(isPast(new Date(now))).toBe(false);
  });
});
