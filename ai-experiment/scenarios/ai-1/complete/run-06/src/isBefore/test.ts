import { isBefore } from "./index";
import { toDate } from "../toDate";

describe("isBefore", () => {
  // Teste básico: primeira data é antes da segunda
  it("should return true if the first date is strictly before the second date", () => {
    const date1 = new Date(2024, 0, 5);
    const date2 = new Date(2024, 0, 10);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Teste básico: primeira data é depois da segunda
  it("should return false if the first date is strictly after the second date", () => {
    const date1 = new Date(2024, 0, 10);
    const date2 = new Date(2024, 0, 5);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Teste básico: datas são iguais
  it("should return false if the dates are equal", () => {
    const date1 = new Date(2024, 0, 10, 10, 0, 0, 0);
    const date2 = new Date(2024, 0, 10, 10, 0, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Teste de precisão de tempo (milissegundos)
  it("should consider milliseconds for comparison", () => {
    const date1 = new Date(2024, 0, 10, 10, 0, 0, 0);
    const date2 = new Date(2024, 0, 10, 10, 0, 0, 1); // 1 ms after
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Teste de precisão de tempo (milissegundos - invertido)
  it("should consider milliseconds for comparison (inverted)", () => {
    const date1 = new Date(2024, 0, 10, 10, 0, 0, 1); // 1 ms after
    const date2 = new Date(2024, 0, 10, 10, 0, 0, 0);
    expect(isBefore(date1, date2)).toBe(false);
  });

  // Teste de virada de ano
  it("should correctly compare dates across year boundaries", () => {
    const date1 = new Date(2024, 11, 31);
    const date2 = new Date(2025, 0, 1);
    expect(isBefore(date1, date2)).toBe(true);
  });

  // Teste com timestamp como entrada
  it("should work with timestamps as arguments", () => {
    const timestamp1 = new Date(2024, 0, 5).getTime();
    const timestamp2 = new Date(2024, 0, 10).getTime();
    expect(isBefore(timestamp1, timestamp2)).toBe(true);
    expect(isBefore(timestamp2, timestamp1)).toBe(false);
  });

  // Teste com string parsável como entrada
  it("should work with parsable strings as arguments", () => {
    const dateString1 = "2024-01-05T12:00:00.000Z";
    const dateString2 = "2024-01-10T12:00:00.000Z";
    expect(isBefore(dateString1, dateString2)).toBe(true);
    expect(isBefore(dateString2, dateString1)).toBe(false);
  });

  // Teste com uma data inválida (primeiro argumento)
  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2024, 0, 10);
    expect(isBefore(invalidDate, validDate)).toBe(false);
  });

  // Teste com uma data inválida (segundo argumento)
  it("should return false if the second date is invalid", () => {
    const validDate = new Date(2024, 0, 10);
    const invalidDate = new Date(NaN);
    expect(isBefore(validDate, invalidDate)).toBe(false);
  });

  // Teste com ambas as datas inválidas
  it("should return false if both dates are invalid", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    expect(isBefore(invalidDate1, invalidDate2)).toBe(false);
  });

  // Teste com string inválida como entrada
  it("should return false if any date argument is an invalid string", () => {
    const validDate = new Date(2024, 0, 10);
    expect(isBefore(validDate, "invalid date")).toBe(false);
    expect(isBefore("invalid date", validDate)).toBe(false);
    expect(isBefore("invalid date 1", "invalid date 2")).toBe(false);
  });

  // Teste com null/undefined (toDate deve tratar como Invalid Date)
  it("should return false if null or undefined are passed as arguments", () => {
    const validDate = new Date(2024, 0, 10);
    // @ts-ignore
    expect(isBefore(validDate, null)).toBe(false);
    // @ts-ignore
    expect(isBefore(null, validDate)).toBe(false);
    // @ts-ignore
    expect(isBefore(validDate, undefined)).toBe(false);
    // @ts-ignore
    expect(isBefore(undefined, validDate)).toBe(false);
    // @ts-ignore
    expect(isBefore(null, undefined)).toBe(false);
  });
});
