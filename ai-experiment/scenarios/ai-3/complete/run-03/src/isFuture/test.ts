import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if a date is in the future", () => {
    const date = new Date(new Date().getTime() + 1000);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const date = "3014-01-01";
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles timestamp input", () => {
    const date = new Date().getTime() + 1000;
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
