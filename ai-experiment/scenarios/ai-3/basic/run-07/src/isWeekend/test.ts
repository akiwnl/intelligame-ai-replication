import { isWeekend } from "./index";
import { toDate } from "../toDate/index.js";

describe("isWeekend", () => {
  it("should check if a date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });
});
```
