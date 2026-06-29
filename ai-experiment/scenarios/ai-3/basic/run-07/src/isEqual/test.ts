import { isEqual } from "./index";
import { toDate } from "../toDate/index.js";

describe("isEqual", () => {
  it("should check if two dates are equal", () => {
    const leftDate = new Date(2014, 6, 2, 6, 30, 45, 0);
    const rightDate = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(leftDate, rightDate);
    expect(result).toBe(false);
  });
});
