import { getDaysInYear } from "./index";
import { toDate } from "../toDate/index.js";

describe("getDaysInYear", () => {
  it("should get the number of days in a year", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });
});
