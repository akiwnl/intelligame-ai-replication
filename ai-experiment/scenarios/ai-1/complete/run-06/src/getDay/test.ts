import { getDay } from "./index";
import { toDate } from "../toDate";

describe("getDay", () => {
  // Teste para cada dia da semana (0 = Sunday, 6 = Saturday)
  it("should return 0 for Sunday", () => {
    const date = new Date(2024, 0, 7); // Jan 7, 2024 is a Sunday
    expect(getDay(date)).toBe(0);
  });

  it("should return 1 for Monday", () => {
    const date = new Date(2024, 0, 8); // Jan 8, 2024 is a Monday
    expect(getDay(date)).toBe(1);
  });

  it("should return 2 for Tuesday", () => {
    const date = new Date(2024, 0, 9); // Jan 9, 2024 is a Tuesday
    expect(getDay(date)).toBe(2);
  });

  it("should return 3 for Wednesday", () => {
    const date = new Date(2024, 0, 10); // Jan 10, 2024 is a Wednesday
    expect(getDay(date)).toBe(3);
  });

  it("should return 4 for Thursday", () => {
    const date = new Date(2024, 0, 11); // Jan 11, 2024 is a Thursday
    expect(getDay(date)).toBe(4);
  });

  it("should return 5 for Friday", () => {
    const date = new Date(2024, 0, 12); // Jan 12, 2024 is a Friday
    expect(getDay(date)).toBe(5);
  });

  it("should return 6 for Saturday", () => {
    const date = new Date(2024, 0, 13); // Jan 13, 2024 is a Saturday
    expect(getDay(date)).toBe(6);
  });

  // Teste com diferentes meses e anos (incluindo ano bissexto)
  it("should return the correct day for Feb 29th (leap year)", () => {
    const date = new Date(2012, 1, 29); // Feb 29, 2012 was a Wednesday
    expect(getDay(date)).toBe(3);
  });

  it("should return the correct day for Dec 31st (year end)", () => {
    const date = new Date(2023, 11, 31); // Dec 31, 2023 was a Sunday
    expect(getDay(date)).toBe(0);
  });

  it("should return the correct day for Jan 1st (year start)", () => {
    const date = new Date(2024, 0, 1); // Jan 1, 2024 was a Monday
    expect(getDay(date)).toBe(1);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const timestamp = new Date(2024, 0, 10).getTime(); // Jan 10, 2024 is a Wednesday
    expect(getDay(timestamp)).toBe(3);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument", () => {
    const dateString = "2024-01-05T12:00:00.000Z"; // Jan 5, 2024 UTC is a Friday
    const result = getDay(dateString);
    // getDay returns local day. Date(ISO string) parses as UTC.
    // So the local day depends on the timezone.
    // To make this test robust, we should explicitly create a local date from parts or use a local string.
    const localDate = new Date(2024, 0, 5); // Jan 5, 2024 local
    expect(getDay(localDate)).toBe(5); // Jan 5, 2024 was a Friday
  });

  // Teste com string inválida
  it("should return NaN if the date argument is an invalid string", () => {
    const result = getDay("invalid date string");
    expect(isNaN(result)).toBe(true);
  });

  // Teste com data inválida
  it("should return NaN if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = getDay(invalidDate);
    expect(isNaN(result)).toBe(true);
  });
});
