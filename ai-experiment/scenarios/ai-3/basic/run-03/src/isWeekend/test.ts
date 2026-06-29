import { isWeekend } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isWeekend", () => {
  it("checks if a date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });
});
```
