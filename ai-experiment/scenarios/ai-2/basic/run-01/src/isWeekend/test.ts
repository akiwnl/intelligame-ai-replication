import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday as weekend", () => {
    // 3 Oct 2020 was Saturday
    expect(isWeekend(new Date(2020, 9, 3))).toBe(true);
  });
  it("detects Sunday as weekend", () => {
    // 4 Oct 2020 was Sunday
    expect(isWeekend(new Date(2020, 9, 4))).toBe(true);
  });
  it("detects Monday as not weekend", () => {
    // 5 Oct 2020 was Monday
    expect(isWeekend(new Date(2020, 9, 5))).toBe(false);
  });
});
