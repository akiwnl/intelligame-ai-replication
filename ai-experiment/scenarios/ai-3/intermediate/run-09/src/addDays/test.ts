import { addDays } from "./index";

describe("addDays", () => {
  it("should add 10 days to 1 September 2014", () => {
    const date = new Date(2014, 8, 1);
    const result = addDays(date, 10);
    expect(result.getDate()).toBe(11);
  });
});
