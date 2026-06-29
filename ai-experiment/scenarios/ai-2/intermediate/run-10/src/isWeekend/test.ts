import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 5 Oct 2014 is Sunday, but let's test Saturday 4 Oct 2014
    expect(isWeekend(new Date(2014, 9, 4))).toBe(true);
  });

  it("detects Sunday", () => {
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
  });

  it("detects weekdays", () => {
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false); // Monday
  });
});
