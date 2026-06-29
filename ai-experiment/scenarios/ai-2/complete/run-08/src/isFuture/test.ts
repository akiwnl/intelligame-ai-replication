import { isFuture } from "./index";

describe("isFuture", () => {
  const MOCK_NOW = new Date("2020-01-01T00:00:00.000Z").getTime();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(MOCK_NOW);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("date after mocked now", () => {
    expect(isFuture(new Date("2020-01-02"))).toBe(true);
  });

  test("date before mocked now", () => {
    expect(isFuture(new Date("2019-12-31"))).toBe(false);
  });

  test("exact now is not future", () => {
    expect(isFuture(new Date(MOCK_NOW))).toBe(false);
  });

  test("invalid date returns false", () => {
    expect(isFuture(new Date("invalid"))).toBe(false);
  });
});
