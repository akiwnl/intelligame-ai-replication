import { isPast } from "./index";
import { toDate } from "../toDate";

describe("isPast", () => {
  // Configurações para controlar o tempo em testes
  let realDateNow: () => number;

  beforeAll(() => {
    // Guarda o Date.now original
    realDateNow = Date.now;
  });

  beforeEach(() => {
    // Mock Date.now para uma data fixa para cada teste
    // Usaremos 2024-01-10T12:00:00.000Z como "agora" para os testes
    // Convertendo para timestamp para garantir consistência
    const fixedNow = new Date(2024, 0, 10, 12, 0, 0, 0).getTime();
    global.Date.now = jest.fn(() => fixedNow);
  });

  afterEach(() => {
    // Restaura Date.now após cada teste
    global.Date.now = realDateNow;
  });

  // Teste: data no passado
  it("should return true if the date is in the past relative to the mocked now", () => {
    const pastDate = new Date(2024, 0, 10, 11, 59, 59, 999); // 1 ms before fixedNow
    expect(isPast(pastDate)).toBe(true);

    const pastDate2 = new Date(2024, 0, 9); // Previous day
    expect(isPast(pastDate2)).toBe(true);
  });

  // Teste: data no futuro
  it("should return false if the date is in the future relative to the mocked now", () => {
    const futureDate = new Date(2024, 0, 10, 12, 0, 0, 1); // 1 ms after fixedNow
    expect(isPast(futureDate)).toBe(false);

    const futureDate2 = new Date(2024, 0, 11); // Next day
    expect(isPast(futureDate2)).toBe(false);
  });

  // Teste: data é exatamente "agora"
  it("should return false if the date is exactly now", () => {
    const nowAsDate = new Date(2024, 0, 10, 12, 0, 0, 0);
    expect(isPast(nowAsDate)).toBe(false);
  });

  // Teste com timestamp como entrada
  it("should work with a timestamp as the date argument", () => {
    const pastTimestamp = new Date(2024, 0, 10, 11, 59, 59, 999).getTime();
    expect(isPast(pastTimestamp)).toBe(true);

    const futureTimestamp = new Date(2024, 0, 10, 12, 0, 0, 1).getTime();
    expect(isPast(futureTimestamp)).toBe(false);
  });

  // Teste com string parsável como entrada
  it("should work with a parsable string as the date argument", () => {
    const pastDateString = "2024-01-10T11:59:59.999Z"; // 1 ms before fixedNow (UTC)
    expect(isPast(pastDateString)).toBe(true);

    const futureDateString = "2024-01-10T12:00:00.001Z"; // 1 ms after fixedNow (UTC)
    expect(isPast(futureDateString)).toBe(false);
  });

  // Teste com string inválida
  it("should return false if the date argument is an invalid string", () => {
    const result = isPast("invalid date string");
    expect(result).toBe(false);
  });

  // Teste com data inválida
  it("should return false if the initial date is invalid", () => {
    const invalidDate = new Date(NaN);
    const result = isPast(invalidDate);
    expect(result).toBe(false);
  });

  // Teste com null/undefined (toDate deve tratar como Invalid Date)
  it("should return false if null or undefined are passed as arguments", () => {
    // @ts-ignore
    expect(isPast(null)).toBe(false);
    // @ts-ignore
    expect(isPast(undefined)).toBe(false);
  });
});
