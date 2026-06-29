import { getDaysInMonth } from "./index";
import { toDate } from "../toDate";

describe("getDaysInMonth", () => {
  // Teste para meses com 31 dias
  it("should return 31 for January", () => {
    expect(getDaysInMonth(new Date(2024, 0, 15))).toBe(31);
  });
  it("should return 31 for March", () => {
    expect(getDaysInMonth(new Date(2024, 2, 15))).toBe(31);
  });
  it("should return 31 for May", () => {
    expect(getDaysInMonth(new Date(2024, 4, 15))).toBe(31);
  });
  it("should return 31 for July", () => {
    expect(getDaysInMonth(new Date(2024, 6, 15))).toBe(31);
  });
  it("should return 31 for August", () => {
    expect(getDaysInMonth(new Date(2024, 7, 15))).toBe(31);
  });
  it("should return 31 for October", () => {
    expect(getDaysInMonth(new Date(2024, 9, 15))).toBe(31);
  });
  it("should return 31 for December", () => {
    expect(getDaysInMonth(new Date(2024, 11, 15))).toBe(31);
  });

  // Teste para meses com 30 dias
  it("should return 30 for April", () => {
    expect(getDaysInMonth(new Date(2024, 3, 15))).toBe(30);
  });
  it("should return 30 for June", () => {
    expect(getDaysInMonth(new Date(2024, 5, 15))).toBe(30);
  });
  it("should return 30 for September", () => {
    expect(getDaysInMonth(new Date(2024, 8, 15))).toBe(30);
  });
  it("should return 30 for November", () => {
    expect(getDaysInMonth(new Date(2024, 10, 15))).toBe(30);
  });

  // Teste para Fevereiro em ano bissexto
  it("should return 29 for February in a leap year (e.g., 2000)", () => {
    expect(getDaysInMonth(new Date(2000, 1, 1))).toBe(29);
  });
  it("should return 29 for February in a leap year (e.g., 2024)", () => {
    expect(getDaysInMonth(new Date(2024, 1, 1))).toBe(29);
  });

  // Teste para Fevereiro em ano não bissexto
  it("should return 28 for February in a non-leap year (e.g., 1900)", () => {
    expect(getDaysInMonth(new Date(1900, 1, 1))).toBe(28);
  });
  it("should return 28 for February in a non-leap year (e.g., 2023)", () => {
    expect(getDaysInMonth(new Date(2023, 1, 1))).toBe(28);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const timestamp = new Date(2024, 1, 1).getTime(); // Feb 2024 (leap)
    expect(getDaysInMonth(timestamp)).toBe(29);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument", () => {
    const dateString = "2023-04-15T12:00:00.000Z"; // April 2023
    expect(getDaysInMonth(dateString)).toBe(30);
  });

  // Teste com string inválida
  it("should return NaN if the date argument is an invalid string", () => {
    const result = getDaysInMonth("invalid date string");
    expect(isNaN(result)).toBe(true);
  });

  // Teste com data inválida
  it("should return NaN if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = getDaysInMonth(invalidDate);
    expect(isNaN(result)).toBe(true);
  });

  // Teste de borda: Passando o último dia do mês para garantir que ainda funciona
  it("should work correctly when given the last day of the month", () => {
    const date = new Date(2024, 0, 31); // Jan 31, 2024
    expect(getDaysInMonth(date)).toBe(31);
  });

  // Teste de borda: Passando o primeiro dia do mês para garantir que ainda funciona
  it("should work correctly when given the first day of the month", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024
    expect(getDaysInMonth(date)).toBe(31);
  });
});
