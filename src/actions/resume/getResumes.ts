import { Resume } from "@/interfaces/Resume";
import { filterLastItems } from "@/utils/FilterLastItems";

export const getResumes = async(userId:string):Promise<Resume[]> =>{
  
  try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/resume/${userId}`)
   
    if(!request.ok){
        throw new Error('Error while getting the list of resumes');
    }
    const resumes = await request.json();
    return filterLastItems(resumes,5);
}
  catch(error){
    if(error instanceof Error){
        throw new Error(error.message)
    }
    console.log(error);
    return []
  }
}