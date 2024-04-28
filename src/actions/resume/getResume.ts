import { Resume } from "@/interfaces/Resume";

export const getResume = async(userId:string,resumeId:string):Promise<Resume> =>{
  
  try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/resume/${userId}/${resumeId}`)
   
    if(!request.ok){
        throw new Error('Error while getting the list of resume');
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