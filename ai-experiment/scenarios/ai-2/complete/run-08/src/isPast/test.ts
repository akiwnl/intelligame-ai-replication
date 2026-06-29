import { isPast } from "./index";

describe("isPast", () => {
  const MOCK_NOW = new Date("2020-01-01T00:00:00.000Z").getTime();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(MOCK_NOW);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("date before mocked now", () => {
    expect(isPast(new Date("2019-12-31"))).toBe(true);
  });

  test("date after mocked now", () => {
    expect(isPast(new Date("2020-01-02"))).toBe(false);
  });

  test("exact now is not past", () => {
    expect(isPast(new Date(MOCK_NOW))).toBe(false);
  });

  test("invalid date returns false", () => {
    expect(isPast(new Date("invalid"))).toBe(false);
  });
});
