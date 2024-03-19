import { Interviews } from "@/interfaces/Interviews";
import { CalendarUtils } from "@/utils/date.utils";


export const getInterviewsByDate = async (date:Date):Promise<Interviews []> =>{
    const formattedDate = CalendarUtils.getFormattedYMDDate(date);
    
    try{
     const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/interviews/get-interviews/${formattedDate}`,{ next: { revalidate: 3600 } });
     
     
     if(!request.ok){
        throw new Error('Error happens while getting the interviews information');
     }

     return await request.json();
    }
    catch(err){
        if(err instanceof Error){
            throw Error(err.message)
        }
        console.log(err);
        return [];
    }
}