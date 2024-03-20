

import  {CalendarUtils} from "../../src/utils/date.utils";

describe('Calendar Utils Test getDayInText',()=>{

    it("should return Monday for day 1", () => {
        expect(CalendarUtils.getDayInText(1)).toBe("Monday");
    });

      it("should return Tuesday for day 2", () => {
        expect(CalendarUtils.getDayInText(2)).toBe("Tuesday");
      });

      it('should return Wednesday when passing 3 as day',()=>{
        expect(CalendarUtils.getDayInText(3)).toBe('Wednesday');
      })

      it('should return Thursday when passing 4 as day',()=>{
        expect(CalendarUtils.getDayInText(4)).toBe('Thursday');
      })

      it('should return Friday when passing 5 as day',()=>{
        expect(CalendarUtils.getDayInText(5)).toBe('Friday');
      })

      it('should return Saturday when passing 6 as day',()=>{
        expect(CalendarUtils.getDayInText(6)).toBe('Saturday');
      })

      it('should return Sunday when passing 7 as day',()=>{
        expect(CalendarUtils.getDayInText(7)).toBe('Sunday');
      })  
})

describe('Get Day in Month Test',()=>{

    it("should return correct day and month for valid date", () => {
        const result = CalendarUtils.getDayAndMonth("2022-12-31");
        expect(result.day).toBe("31");
        expect(result.month).toBe("December");
      });

      it("should return correct day and month for single digit day", () => {
        const result = CalendarUtils.getDayAndMonth("2022-01-01");
        expect(result.day).toBe("01");
        expect(result.month).toBe("January");
      });

      it("should return correct day and month for February", () => {
        const result = CalendarUtils.getDayAndMonth("2020-02-29");
        expect(result.day).toBe("29");
        expect(result.month).toBe("February");
      });
    
})

describe('Test in GetCurrentMonthName',()=>{
  it("should return the current month name", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2022-12-25"));

    expect(CalendarUtils.getCurrentMonthName()).toBe("December");

    jest.useRealTimers();
  });
})


describe('Test in GetFormatttedYMDDate',()=>{
  it("should return a date string in YYYY-MM-DD format", () => {
    const date = new Date(2020, 1, 15);
    const result = CalendarUtils.getFormattedYMDDate(date);

    expect(result).toBe("2020-02-15");
  });

  it("should handle single digit day, month, and year values", () => {
    const date = new Date(2010, 0, 5);
    const result = CalendarUtils.getFormattedYMDDate(date);

    expect(result).toBe("2010-01-05");
  });
})


