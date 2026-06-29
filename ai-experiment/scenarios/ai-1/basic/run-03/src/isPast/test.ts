import { isPast } from "./index";

describe("isPast", () => {
  const MOCKED_NOW = new Date(2014, 9, 6, 12, 0, 0, 0); // October 6, 2014 12:00:00.000

  const RealDate = Date;
  beforeAll(() => {
    global.Date = class extends RealDate {
      constructor(dateArg?: Date | number | string | number, ...rest: number[]) {
        if (dateArg === undefined) {
          super(MOCKED_NOW);
        } else if (typeof dateArg === 'string' && rest.length === 0) {
          super(dateArg);
        } else if (typeof dateArg === 'number' && rest.length === 0) {
          super(dateArg);
        } else if (typeof dateArg === 'object' && dateArg instanceof RealDate && rest.length === 0) {
          super(dateArg.getTime());
        } else if (typeof dateArg === 'number' && typeof rest[0] === 'number') {
          super(dateArg, rest[0], ...(rest.slice(1)));
        } else {
          super(dateArg as any, ...rest as any);
        }
      }
    } as typeof Date;
  });

  afterAll(() => {
    global.Date = RealDate;
  });

  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(pastDate)).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isPast(futureDate)).toBe(false);
  });

  it("should return false if the given date is now", () => {
    // MOCKED_NOW is created with Date(MOCKED_NOW) which will be precisely MOCKED_NOW.getTime()
    // The comparison `d.getTime() < now.getTime()` will be false for equal dates.
    expect(isPast(MOCKED_NOW)).toBe(false);
  });

  it("should return false if the given date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(isPast(invalidDate)).toBe(false); // NaN comparison results in false
  });

  it("should accept a timestamp as date argument", () => {
    const pastTimestamp = MOCKED_NOW.getTime() - 1000; // 1 second in the past
    expect(isPast(pastTimestamp)).toBe(true);

    const futureTimestamp = MOCKED_NOW.getTime() + 1000; // 1 second in the future
    expect(isPast(futureTimestamp)).toBe(false);
  });

  it("should accept a date string as date argument", () => {
    const pastDateString = "2014-01-01T00:00:00Z";
    expect(isPast(pastDateString)).toBe(true);

    const futureDateString = "2015-01-01T00:00:00Z";
    expect(isPast(futureDateString)).toBe(false);
  });
});
