import { isFuture } from "./index";

describe("isFuture", () => {
  const now = new Date("2022-01-01T00:00:00Z").getTime();
  const RealNow = Date.now;

  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => now);
  });

  afterAll(() => {
    (Date.now as any).mockRestore();
  });

  it("returns true for dates after mocked now", () => {
    expect(isFuture(new Date("2022-01-02T00:00:00Z"))).toBe(true);
  });

  it("returns false for dates before mocked now", () => {
    expect(isFuture(new Date("2021-12-31T23:59:59Z"))).toBe(false);
  });

  it("returns false for the exact mocked now", () => {
    expect(isFuture(new Date(now))).toBe(false);
  });
});
