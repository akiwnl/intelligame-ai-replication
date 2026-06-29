import { isAfter } from "./index";

describe("isAfter", () => {
  test("first date later", () => {
    expect(isAfter(new Date(2021, 5, 10), new Date(2020, 5, 10))).toBe(true);
  });

  test("first date earlier", () => {
    expect(isAfter(new Date(2019, 0, 1), new Date(2020, 0, 1))).toBe(false);
  });

  test("equal dates => false", () => {
    const d = new Date(2021, 3, 3);
    expect(isAfter(d, d)).toBe(false);
  });

  test("handles timestamps", () => {
    const now = Date.now();
    expect(isAfter(now + 1000, now)).toBe(true);
  });

  test("invalid dates => false", () => {
    const invalid = new Date("invalid");
    expect(isAfter(invalid, new Date())).toBe(false);
    expect(isAfter(new Date(), invalid)).toBe(false);
  });
});
