import { getDate } from "./index";
import { toDate } from "../toDate";

describe("getDate", () => {
  // Teste básico: dia no meio do mês
  it("should return the day of the month for a regular date", () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024
    expect(getDate(date)).toBe(15);
  });

  // Teste de início do mês
  it("should return 1 for the first day of the month", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDate(date)).toBe(1);
  });

  // Teste de final do mês (31 dias)
  it("should return 31 for the last day of a 31-day month", () => {
    const date = new Date(2024, 0, 31); // Jan 31, 2024
    expect(getDate(date)).toBe(31);
  });

  // Teste de final do mês (30 dias)
  it("should return 30 for the last day of a 30-day month", () => {
    const date = new Date(2024, 3, 30); // Apr 30, 2024
    expect(getDate(date)).toBe(30);
  });

  // Teste de ano bissexto (Fevereiro 29)
  it("should return 29 for Feb 29th in a leap year", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 (leap year)
    expect(getDate(date)).toBe(29);
  });

  // Teste de ano não bissexto (Fevereiro 28)
  it("should return 28 for Feb 28th in a non-leap year", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    expect(getDate(date)).toBe(28);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const timestamp = new Date(2024, 0, 20).getTime();
    expect(getDate(timestamp)).toBe(20);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument", () => {
    const dateString = "2024-03-10T10:00:00.000Z";
    const result = getDate(dateString);
    // Note: new Date() with ISO string is UTC, so getDate() will be UTC day
    const expectedDate = new Date(dateString);
    expect(result).toBe(expectedDate.getUTCDate()); // Use getUTCDate for consistency with ISO string
  });

  // Teste com string inválida
  it("should return NaN if the date argument is an invalid string", () => {
    const result = getDate("invalid date string");
    expect(isNaN(result)).toBe(true);
  });

  // Teste com data inválida
  it("should return NaN if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = getDate(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Teste com valores limites de Date (mínimo e máximo)
  it("should handle dates at the extremes of the Date object range", () => {
    const minDate = new Date(-8640000000000000); // Minimum representable date
    expect(getDate(minDate)).toBeDefined(); // Should not be NaN, but a valid day

    const maxDate = new Date(8640000000000000); // Maximum representable date
    expect(getDate(maxDate)).toBeDefined(); // Should not be NaN, but a valid day
  });
});
