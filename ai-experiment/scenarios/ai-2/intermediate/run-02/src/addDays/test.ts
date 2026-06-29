import { addDays } from "./index";

describe("addDays", () => {
  it("adds positive days", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11);
  });

  it("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 15), -5);
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(10);
  });
});
