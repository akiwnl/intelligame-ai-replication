import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("checks if the date is a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result
