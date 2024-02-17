
export const CalendarUtils = {

       getDayInText: (day:number) =>{
        const DaysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        return DaysOfTheWeek[day-1];
       },
    
    getMondayAndSundayOfWeek:(year:number, month:number, weekNumber:number) =>{ 
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        
        // Calculate the offset needed to get to the first Monday of the month
       const offsetToMonday = (8 - firstDayOfWeek) % 7;
        
        // Calculate the date of the first Monday of the month
        const firstMondayDate = 1 + offsetToMonday;
        
        // Calculate the date of the Monday of the target week
        const targetMondayDate = firstMondayDate + (weekNumber - 1) * 7 +1;
        
        // Calculate the date of the Sunday of the target week
        const targetSundayDate = targetMondayDate + 6;
        
        // Return an object containing the Monday and Sunday dates
        return {
            monday: new Date(year, month, targetMondayDate),
            sunday: new Date(year, month, targetSundayDate)
        };
    },
    
    getCurrentWeekNumber:(year:number, month:number, day:number) =>{
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil((((+date - +startOfYear) / 86400000) + 1) / 7);
        return weekNumber;
    },
    getFormattedMDYDate:()=>{
        const today = new Date();
        return today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    },
    getCurrentMonthName:()=>{
        const today = new Date();
        return today.toLocaleString('en-US', { month: 'long' });
    }
}