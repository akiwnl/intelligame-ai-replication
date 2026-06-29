import { getDaysInYear } from "./index";
import { toDate } from "../toDate";

describe("getDaysInYear", () => {
  // Teste para anos bissextos
  it("should return 366 for a leap year (e.g., 2000)", () => {
    const date = new Date(2000, 0, 1); // Year 2000 is a leap year
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should return 366 for a leap year (e.g., 2004)", () => {
    const date = new Date(2004, 0, 1); // Year 2004 is a leap year
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should return 366 for a leap year (e.g., 2024)", () => {
    const date = new Date(2024, 0, 1); // Year 2024 is a leap year
    expect(getDaysInYear(date)).toBe(366);
  });

  // Teste para anos não bissextos
  it("should return 365 for a non-leap year (e.g., 2001)", () => {
    const date = new Date(2001, 0, 1); // Year 2001 is not a leap year
    expect(getDaysInYear(date)).toBe(365);
  });

  it("should return 365 for a non-leap year (e.g., 1900 - divisible by 100 but not 400)", () => {
    const date = new Date(1900, 0, 1); // Year 1900 is not a leap year
    expect(getDaysInYear(date)).toBe(365);
  });

  it("should return 365 for a non-leap year (e.g., 2023)", () => {
    const date = new Date(2023, 0, 1); // Year 2023 is not a leap year
    expect(getDaysInYear(date)).toBe(365);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument for a leap year", () => {
    const timestamp = new Date(2020, 0, 1).getTime(); // Year 2020 is a leap year
    expect(getDaysInYear(timestamp)).toBe(366);
  });

  it("should work with a timestamp as the date argument for a non-leap year", () => {
    const timestamp = new Date(2019, 0, 1).getTime(); // Year 2019 is not a leap year
    expect(getDaysInYear(timestamp)).toBe(365);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument for a leap year", () => {
    const dateString = "2016-01-01T12:00:00.000Z"; // Year 2016 is a leap year
    expect(getDaysInYear(dateString)).toBe(366);
  });

  it("should work with a parsable string as the date argument for a non-leap year", () => {
    const dateString = "2017-01-01T12:00:00.000Z"; // Year 2017 is not a leap year
    expect(getDaysInYear(dateString)).toBe(365);
  });

  // Teste com string inválida
  it("should return NaN if the date argument is an invalid string", () => {
    const result = getDaysInYear("invalid date string");
    expect(isNaN(result)).toBe(true);
  });

  // Teste com data inválida
  it("should return NaN if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = getDaysInYear(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Teste de borda: datas no início e fim do ano
  it("should return the correct number of days when given a date at the end of a leap year", () => {
    const date = new Date(2024, 11, 31); // Dec 31, 2024 (leap year)
    expect(getDaysInYear(date)).toBe(366);
  });

  it("should return the correct number of days when given a date at the end of a non-leap year", () => {
    const date = new Date(2023, 11, 31); // Dec 31, 2023 (non-leap year)
    expect(getDaysInYear(date)).toBe(365);
  });
});
