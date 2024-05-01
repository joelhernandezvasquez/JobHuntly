import { Resume } from "@/interfaces/Resume";

export const getResume = async(userId:string,resumeId:string):Promise<Resume | null> =>{
  
  try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/resume/${userId}/${resumeId}`)
   
    if(!request.ok){
       console.error(request);
       return null;
    }

    return await request.json();

}
  catch(error){
    if(error instanceof Error){
        throw new Error(error.message)
    }
    console.log(error);
    return {} as Resume
  }
}