import { Application } from "@/interfaces/Application";

export const getApplication = async(userId:string,applicationId:string):Promise<Application> => {
    try{
        const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications/get-application/${userId}/${applicationId}`);
        
        if(!request.ok){
          throw new Error('Error happening while getting job application');
        }

        return await request.json();
    }
    catch(err){
        if(err instanceof Error){
            throw Error(err.message)
        }
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