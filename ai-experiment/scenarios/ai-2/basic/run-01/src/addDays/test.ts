import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 1), 5);
    expect(result).toEqual(new Date(2020, 0, 6));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 10), -3);
    expect(result).toEqual(new Date(2020, 0, 7));
  });
});
