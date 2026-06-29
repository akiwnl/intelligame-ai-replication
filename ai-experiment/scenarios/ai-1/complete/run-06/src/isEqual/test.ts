import { isEqual } from "./index";
import { toDate } from "../toDate";

describe("isEqual", () => {
  // Teste básico: datas idênticas
  it("should return true if two dates are identical", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 123);
    const date2 = new Date(2024, 0, 10, 10, 30, 45, 123);
    expect(isEqual(date1, date2)).toBe(true);
  });

  // Teste: datas com diferença de milissegundos
  it("should return false if dates differ by milliseconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 123);
    const date2 = new Date(2024, 0, 10, 10, 30, 45, 124);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de segundos
  it("should return false if dates differ by seconds", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 45, 0);
    const date2 = new Date(2024, 0, 10, 10, 30, 46, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de minutos
  it("should return false if dates differ by minutes", () => {
    const date1 = new Date(2024, 0, 10, 10, 30, 0, 0);
    const date2 = new Date(2024, 0, 10, 10, 31, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de horas
  it("should return false if dates differ by hours", () => {
    const date1 = new Date(2024, 0, 10, 10, 0, 0, 0);
    const date2 = new Date(2024, 0, 10, 11, 0, 0, 0);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de dias
  it("should return false if dates differ by days", () => {
    const date1 = new Date(2024, 0, 10);
    const date2 = new Date(2024, 0, 11);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de meses
  it("should return false if dates differ by months", () => {
    const date1 = new Date(2024, 0, 10);
    const date2 = new Date(2024, 1, 10);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste: datas com diferença de anos
  it("should return false if dates differ by years", () => {
    const date1 = new Date(2024, 0, 10);
    const date2 = new Date(2025, 0, 10);
    expect(isEqual(date1, date2)).toBe(false);
  });

  // Teste com timestamp como entrada
  it("should work with timestamps as arguments when equal", () => {
    const timestamp = new Date(2024, 0, 10, 10, 30, 0, 0).getTime();
    expect(isEqual(timestamp, timestamp)).toBe(true);
  });

  it("should work with timestamps as arguments when not equal", () => {
    const timestamp1 = new Date(2024, 0, 10, 10, 30, 0, 0).getTime();
    const timestamp2 = new Date(2024, 0, 10, 10, 30, 0, 1).getTime();
    expect(isEqual(timestamp1, timestamp2)).toBe(false);
  });

  // Teste com string parsável como entrada
  it("should work with parsable strings as arguments when equal", () => {
    const dateString = "2024-01-10T12:00:00.000Z";
    expect(isEqual(dateString, dateString)).toBe(true);
  });

  it("should work with parsable strings as arguments when not equal", () => {
    const dateString1 = "2024-01-10T12:00:00.000Z";
    const dateString2 = "2024-01-10T12:00:00.001Z";
    expect(isEqual(dateString1, dateString2)).toBe(false);
  });

  // Teste com uma data inválida (primeiro argumento)
  it("should return false if the first date is invalid", () => {
    const invalidDate = new Date(NaN);
    const validDate = new Date(2024, 0, 10);
    expect(isEqual(invalidDate, validDate)).toBe(false);
  });

  // Teste com uma data inválida (segundo argumento)
  it("should return false if the second date is invalid", () => {
    const validDate = new Date(2024, 0, 10);
    const invalidDate = new Date(NaN);
    expect(isEqual(validDate, invalidDate)).toBe(false);
  });

  // Teste com ambas as datas inválidas
  it("should return false if both dates are invalid (NaN !== NaN)", () => {
    const invalidDate1 = new Date(NaN);
    const invalidDate2 = new Date(NaN);
    expect(isEqual(invalidDate1, invalidDate2)).toBe(false);
  });

  // Teste com string inválida como entrada
  it("should return false if any date argument is an invalid string", () => {
    const validDate = new Date(2024, 0, 10);
    expect(isEqual(validDate, "invalid date")).toBe(false);
    expect(isEqual("invalid date", validDate)).toBe(false);
    expect(isEqual("invalid date 1", "invalid date 2")).toBe(false);
  });

  // Teste com null/undefined (toDate deve tratar como Invalid Date)
  it("should return false if null or undefined are passed as arguments", () => {
    const validDate = new Date(2024, 0, 10);
    // @ts-ignore
    expect(isEqual(validDate, null)).toBe(false);
    // @ts-ignore
    expect(isEqual(null, validDate)).toBe(false);
    // @ts-ignore
    expect(isEqual(validDate, undefined)).toBe(false);
    // @ts-ignore
    expect(isEqual(undefined, validDate)).toBe(false);
    // @ts-ignore
    expect(isEqual(null, undefined)).toBe(false);
  });
});
