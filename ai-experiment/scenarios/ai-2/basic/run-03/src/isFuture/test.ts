import { isFuture } from "./index";

describe("isFuture", () => {
  test("date after now returns true", () => {
    const future = Date.now() + 10000; // 10 seconds ahead
    expect(isFuture(future)).toBe(true);
  });

  test("date before now returns false", () => {
    const past = Date.now() - 10000;
    expect(isFuture(past)).toBe(false);
  });
});
