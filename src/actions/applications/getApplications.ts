import { Application } from "@/interfaces/Application";


export const getApplications = async(userId:string):Promise<Application[]> => {
    try{
        const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications/get-applications/${userId}`);
        
        if(!request.ok){
          throw new Error('Error happening while getting job application history');
        }

        return await request.json();
    }
    catch(err){
        if(err instanceof Error){
            throw Error(err.message)
        }
        return []
    }

   
}