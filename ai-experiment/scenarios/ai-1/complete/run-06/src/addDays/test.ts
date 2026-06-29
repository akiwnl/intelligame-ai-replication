import { addDays } from "./index";
import { toDate } from "../toDate";

describe("addDays", () => {
  // Teste básico: adicionar dias a uma data
  it("should add a positive number of days to a date", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(6); // Jan 6, 2024
  });

  // Teste com valor negativo: subtrair dias
  it("should subtract a negative number of days from a date", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024
    const result = addDays(date, -5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(5); // Jan 5, 2024
  });

  // Teste com zero: retornar a mesma data (clone)
  it("should return a clone of the original date if amount is zero", () => {
    const date = new Date(2024, 0, 10, 10, 30, 0, 500);
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
    expect(result).not.toBe(date); // Should be a new instance
  });

  // Teste de virada de mês
  it("should correctly handle month transitions", () => {
    const date = new Date(2024, 0, 30); // Jan 30, 2024
    const result = addDays(date, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Feb 4, 2024
  });

  // Teste de virada de ano
  it("should correctly handle year transitions", () => {
    const date = new Date(2023, 11, 25); // Dec 25, 2023
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Jan 4, 2024
  });

  // Teste com ano bissexto (fevereiro 29)
  it("should correctly handle leap year February 29th", () => {
    const date = new Date(2024, 1, 28); // Feb 28, 2024 (leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(29); // Feb 29, 2024

    const result2 = addDays(date, 2);
    expect(result2.getFullYear()).toBe(2024);
    expect(result2.getMonth()).toBe(2); // March
    expect(result2.getDate()).toBe(1); // Mar 1, 2024
  });

  // Teste com ano não bissexto (fevereiro 28)
  it("should correctly handle non-leap year February 28th", () => {
    const date = new Date(2023, 1, 28); // Feb 28, 2023 (non-leap year)
    const result = addDays(date, 1);
    expect(result.getFullYear()).toBe(2023);
    expect(result.getMonth()).toBe(2); // March
    expect(result.getDate()).toBe(1); // Mar 1, 2023
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const timestamp = new Date(2024, 0, 1).getTime();
    const result = addDays(timestamp, 5);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(6);
  });

  // Teste com string como entrada
  it("should work with a parsable string as the date argument", () => {
    const dateString = "2024-01-01T00:00:00.000Z"; // UTC string
    const result = addDays(dateString, 5);
    // Note: new Date() with ISO string is UTC, so getDate() will be UTC day
    // For consistency with example, let's assume local conversion for `toDate`
    // to match example behavior (which uses local time).
    // `toDate` uses `new Date(argument)` which respects string formats.
    // If the string is ISO, `new Date(string)` will parse it as UTC, then `setDate` will operate in local time.
    // To make it robust: convert expected date to UTC also.
    const expectedDate = new Date(dateString);
    expectedDate.setDate(expectedDate.getDate() + 5);
    expect(result.getTime()).toBe(expectedDate.getTime());
  });

  // Teste com string inválida
  it("should return an Invalid Date if the date argument is an invalid string", () => {
    const result = addDays("invalid date string", 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Teste com data inválida
  it("should return an Invalid Date if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = addDays(invalidDate, 5);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Teste com amount como NaN
  it("should return an Invalid Date if the amount is NaN", () => {
    const date = new Date(2024, 0, 1);
    const result = addDays(date, NaN);
    expect(isNaN(result.getTime())).toBe(true);
  });

  // Teste com amount como Infinito
  it("should handle Infinity as amount, potentially leading to Invalid Date or extremely large dates", () => {
    const date = new Date(2024, 0, 1);
    const result = addDays(date, Infinity);
    expect(isNaN(result.getTime())).toBe(false); // Date.setDate handles large numbers
    expect(result.getFullYear()).toBeGreaterThan(9999); // Should be a very far future date
  });

  // Teste com amount como -Infinito
  it("should handle -Infinity as amount, potentially leading to Invalid Date or extremely small dates", () => {
    const date = new Date(2024, 0, 1);
    const result = addDays(date, -Infinity);
    expect(isNaN(result.getTime())).toBe(false); // Date.setDate handles large numbers
    expect(result.getFullYear()).toBeLessThan(100); // Should be a very far past date
  });
});
