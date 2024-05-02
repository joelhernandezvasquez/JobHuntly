import { Interviews } from "@/interfaces/Interviews";


export const getInterview = async (userId:string,interviewId:string):Promise<Interviews | null> =>{
    
    try{
     const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/interviews/get-interview/${userId}/${interviewId}`);
     
     if(!request.ok){
        console.error(request);
        return null;
     }

     return await request.json();
    }
    catch(err){
        if(err instanceof Error){
            throw Error(err.message)
        }
        console.log(err);
        return null;
    }
}