import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("should check if the date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(false);
  });
});
```
