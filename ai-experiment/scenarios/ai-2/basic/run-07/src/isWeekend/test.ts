import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 5 Oct 2020 was a Monday, choose a known Saturday
    const sat = new Date(2020, 2, 7); // 7 Mar 2020 = Saturday
    expect(isWeekend(sat)).toBe(true);
  });

  it("detects Sunday", () => {
    const sun = new Date(2020, 2, 8); // Sunday
    expect(isWeekend(sun)).toBe(true);
  });

  it("detects weekdays as not weekend", () => {
    const mon = new Date(2020, 2, 9); // Monday
    expect(isWeekend(mon)).toBe(false);
  });
});
