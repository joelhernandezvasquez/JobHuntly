import { TimeUnit } from "@/types";

export const getTotalApplicationByFrequency = async (timeFrequency:TimeUnit) =>{
    try{
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/application/total/${timeFrequency}`);
     
      if(!request.ok){
        throw new Error(`Error happens while getting the total application`);
      }

      const response = await request.json();
      return response;
   
    }
    catch(err){
        if(err instanceof Error){
            throw Error(`${err.message}`);
         }
         console.log(err);
    }
}