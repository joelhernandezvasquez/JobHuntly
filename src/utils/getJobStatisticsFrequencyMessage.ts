import { TimeUnit} from "@/types";
import { CalendarUtils } from "./date.utils";

const DAILY = 'Day';
const WEEKLY = 'Week';

export const getJobStatisticsFrequencyMessage = (timeUnit:TimeUnit):string =>{
    if(timeUnit === DAILY ){
     return getDailyFrequencyMessage();
  }
  if(timeUnit === WEEKLY){
   return getWeeklyFrequencyMessage();
  }
    return `for ${CalendarUtils.getCurrentMonthName()}`;
}

const getDailyFrequencyMessage = () =>{
  const today = new Date();
  return `for ${CalendarUtils.getDayInText(today.getDay())} ${CalendarUtils.getFormattedMDYDate()}`;
}

const getWeeklyFrequencyMessage = () =>{
  const today = new Date();
  const month = CalendarUtils.getCurrentMonthName();
  const currentWeekNumber = CalendarUtils.getCurrentWeekNumber(today.getFullYear(),today.getMonth(),today.getDay());
  const dates = CalendarUtils.getMondayAndSundayOfWeek(today.getFullYear(),today.getMonth(),currentWeekNumber +1);
  
  return `From ${month} ${dates.monday.getDate()}-${dates.sunday.getDate()}`;
}

