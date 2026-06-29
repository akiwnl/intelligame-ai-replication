import { addDays } from "./index";

describe("addDays", () => {
  it("should add days to a date", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });
});
