// import { describe, expect, it } from "vitest";
import { addDays } from "./index";
describe("addDays", () => {
    it("adds the given number of days", () => {
        const result = addDays(new Date(2014, 8 /* Sep */, 1), 10);
        expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
    });
    it("accepts a timestamp", () => {
        const result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
        expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
    });
    it("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        addDays(date, 11);
        expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    it("returns `Invalid Date` if the given date is invalid", () => {
        const result = addDays(new Date(NaN), 10);
        expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    it("returns `Invalid Date` if the given amount is NaN", () => {
        const result = addDays(new Date(2014, 8 /* Sep */, 1), NaN);
        expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    it("returns something `Invalid Date`", () => {
        const result = addDays(new Date(2014, 8 /* Sep */, 1), NaN);
        expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
