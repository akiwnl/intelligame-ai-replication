import { isPast } from "./index";
import { toDate } from "../toDate/index.js";

describe("isPast", () => {
  it("should check if a date is in the past", () => {
    const date = new Date(2014, 6, 2);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
