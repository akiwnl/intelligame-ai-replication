import { isWeekend } from "./index";
import { toDate } from "../toDate";

describe("isWeekend", () => {
  // Teste para sábado
  it("should return true for a Saturday", () => {
    const date = new Date(2024, 0, 13); // Jan 13, 2024 is a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  // Teste para domingo
  it("should return true for a Sunday", () => {
    const date = new Date(2024, 0, 14); // Jan 14, 2024 is a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  // Teste para dia de semana (segunda-feira)
  it("should return false for a Monday", () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024 is a Monday
    expect(isWeekend(date)).toBe(false);
  });

  // Teste para dia de semana (sexta-feira)
  it("should return false for a Friday", () => {
    const date = new Date(2024, 0, 12); // Jan 12, 2024 is a Friday
    expect(isWeekend(date)).toBe(false);
  });

  // Teste de borda: transição de sexta para sábado
  it("should return false for Friday 23:59:59.999 and true for Saturday 00:00:00.000", () => {
    const friday = new Date(2024, 0, 12, 23, 59, 59, 999); // Friday
    const saturday = new Date(2024, 0, 13, 0, 0, 0, 0); // Saturday
    expect(isWeekend(friday)).toBe(false);
    expect(isWeekend(saturday)).toBe(true);
  });

  // Teste de borda: transição de domingo para segunda
  it("should return true for Sunday 23:59:59.999 and false for Monday 00:00:00.000", () => {
    const sunday = new Date(2024, 0, 14, 23, 59, 59, 999); // Sunday
    const monday = new Date(2024, 0, 15, 0, 0, 0, 0); // Monday
    expect(isWeekend(sunday)).toBe(true);
    expect(isWeekend(monday)).toBe(false);
  });

  // Teste com anos bissextos (verificar se Feb 29 não é confundido)
  it("should correctly identify weekday for Feb 29th (leap year)", () => {
    const date = new Date(2024, 1, 29); // Feb 29, 2024 was a Thursday
    expect(isWeekend(date)).toBe(false);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const saturdayTimestamp = new Date(2024, 0, 6).getTime(); // Jan 6, 2024 is a Saturday
    expect(isWeekend(saturdayTimestamp)).toBe(true);

    const wednesdayTimestamp = new Date(2024, 0, 3).getTime(); // Jan 3, 2024 is a Wednesday
    expect(isWeekend(wednesdayTimestamp)).toBe(false);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument", () => {
    const saturdayString = "2024-01-06T12:00:00.000Z"; // Jan 6, 2024 UTC is a Saturday
    expect(isWeekend(saturdayString)).toBe(true);

    const mondayString = "2024-01-08T12:00:00.000Z"; // Jan 8, 2024 UTC is a Monday
    expect(isWeekend(mondayString)).toBe(false);
  });

  // Teste com string inválida
  it("should return false if the date argument is an invalid string", () => {
    const result = isWeekend("invalid date string");
    expect(result).toBe(false);
  });

  // Teste com data inválida
  it("should return false if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = isWeekend(invalidDate);
    expect(result).toBe(false);
  });

  // Teste com null/undefined (toDate deve tratar como Invalid Date)
  it("should return false if null or undefined are passed as arguments", () => {
    // @ts-ignore
    expect(isWeekend(null)).toBe(false);
    // @ts-ignore
    expect(isWeekend(undefined)).toBe(false);
  });
});
