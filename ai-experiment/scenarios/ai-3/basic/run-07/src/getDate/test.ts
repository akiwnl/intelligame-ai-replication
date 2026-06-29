import { getDate } from "./index";
import { toDate } from "../toDate/index.js";

describe("getDate", () => {
  it("should get the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });
});
