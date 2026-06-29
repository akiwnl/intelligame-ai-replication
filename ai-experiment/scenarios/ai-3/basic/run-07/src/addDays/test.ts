import { addDays } from "./index";
import { toDate } from "../toDate/index.js";

describe("addDays", () => {
  it("should add days to the given date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(toDate(result)).toEqual(toDate(new Date(2014, 8, 11)));
  });
});
