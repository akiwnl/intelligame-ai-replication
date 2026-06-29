import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2020, 0, 1), 10);
    expect(result).toEqual(new Date(2020, 0, 11));
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 10), -5);
    expect(result).toEqual(new Date(2020, 0, 5));
  });

  it("does not mutate the original date", () => {
    const original = new Date(2020, 0, 1);
    addDays(original, 3);
    expect(original).toEqual(new Date(2020, 0, 1));
  });
});
