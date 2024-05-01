import { Application } from "@/interfaces/Application";

export const getApplication = async(userId:string,applicationId:string):Promise<Application | null> => {
    try{
        const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications/get-application/${userId}/${applicationId}`);
        
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
        return {
            applicationId:'null',
            applicant_id: 'null',
            company:'null',
            role: 'null',
            status: 'Rejected',
            date_applied: new Date(),
            follow_up_date:null,
        }
    }

   
}