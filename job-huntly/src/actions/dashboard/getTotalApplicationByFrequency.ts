
import { Frequency, TimeUnit } from "@/types";


//TODO:Need to type the promise return type.
export const getTotalApplicationByFrequency = async (userId:string,timeFrequency:TimeUnit):Promise<Frequency> =>{

    try{
  //       await new Promise((resolve) => {
  //     setTimeout(resolve, 2000); // Delay the execution of resolve() by 2 seconds
  // });
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/application/total-by-frequency`,{
        cache:'no-store',
        method:"POST",
       
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            userId,
           frequency:timeFrequency
        })
      });
     
      if(!request.ok){
        throw new Error(`Error happens while getting the total application`);
      }
        const response:Frequency  =  await request.json();
      return response;
    }
    catch(err){
      if (err instanceof Error) {
        throw Error(`${err.message}`);
    }
    console.log(err);
    return [];
    }
}