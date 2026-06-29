import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("identifies Saturdays and Sundays", () => {
    // 5 Oct 2014 was Sunday
    expect(isWeekend(new Date(2014, 9, 5))).toBe(true);
    // 4 Oct 2014 was Saturday
    expect(isWeekend(new Date(2014, 9, 4))).toBe(true);
    // 6 Oct 2014 was Monday
    expect(isWeekend(new Date(2014, 9, 6))).toBe(false);
  });
});
