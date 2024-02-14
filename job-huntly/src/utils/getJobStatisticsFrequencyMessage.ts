import { TimeUnit} from "@/types";
import { CalendarUtils } from "./date.utils";

// TODO:Move this to constant file
const DAILY = 'Daily';
const WEEKLY = 'Weekly';
const MONTHLY = 'Monthly';

// TODO:Refactor the functions
export const getJobStatisticsFrequencyMessage = (timeUnit:TimeUnit):string =>{
    const today = new Date();
  
    if(timeUnit === DAILY ){
     return `for ${CalendarUtils.getDayInText(today.getDay())} ${CalendarUtils.getFormattedMDYDate()}`;
  }

  if(timeUnit === WEEKLY){
   
    const month = CalendarUtils.getCurrentMonthName();
    const currentWeekNumber = CalendarUtils.getCurrentWeekNumber(today.getFullYear(),today.getMonth(),today.getDay());
    const dates = CalendarUtils.getMondayAndSundayOfWeek(today.getFullYear(),today.getMonth(),currentWeekNumber +1);
     
    return `From ${month} ${dates.monday.getDate()}-${dates.sunday.getDate()}`
  }
    const month =  CalendarUtils.getCurrentMonthName();
    return `for ${month}`;
}


