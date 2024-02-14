import { TimeUnit} from "@/types";
import { CalendarUtils } from "./date.utils";

// TODO:Move this to constant file
const DAILY = 'Daily';
const WEEKLY = 'Weekly';
const MONTHLY = 'Monthly';

// TODO:Refactor the functions and move more functionalities to Date.util.js module
export const getJobStatisticsFrequencyMessage = (timeUnit:TimeUnit):string =>{
    const today = new Date();
  
    if(timeUnit === DAILY ){
     return `for ${CalendarUtils.getDayInText(today.getDay())} ${today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}`
  }

  if(timeUnit === WEEKLY){
   
    const month = today.toLocaleString('en-US', { month: 'long' });
    const currentWeekNumber = (CalendarUtils.getCurrentWeekNumber(today.getFullYear(),today.getMonth(),today.getDay()));
    const dates = CalendarUtils.getMondayAndSundayOfWeek(today.getFullYear(),today.getMonth(),currentWeekNumber +1);
     return `From ${month} ${dates.monday.getDate()}-${dates.sunday.getDate()}`
  }
    const month = today.toLocaleString('en-US', { month: 'long' });
    return `for ${month}`;
}


