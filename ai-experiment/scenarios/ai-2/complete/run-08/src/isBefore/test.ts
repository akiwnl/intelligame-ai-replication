import { isBefore } from "./index";

describe("isBefore", () => {
  test("first date earlier", () => {
    expect(isBefore(new Date(2020, 0, 1), new Date(2021, 0, 1))).toBe(true);
  });

  test("first date later", () => {
    expect(isBefore(new Date(2022, 5, 5), new Date(2021, 5, 5))).toBe(false);
  });

  test("equal dates => false", () => {
    const d = new Date(2021, 4, 4);
    expect(isBefore(d, d)).toBe(false);
  });

  test("handles timestamps", () => {
    const now = Date.now();
    expect(isBefore(now, now + 5000)).toBe(true);
  });

  test("invalid dates => false", () => {
    const invalid = new Date("invalid");
    expect(isBefore(invalid, new Date())).toBe(false);
    expect(isBefore(new Date(), invalid)).toBe(false);
  });
});
