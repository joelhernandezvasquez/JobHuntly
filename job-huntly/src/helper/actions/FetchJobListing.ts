import { JobList } from "../interfaces/JobList";

export const fetchJobList = async ():Promise<JobList []> =>{
  try{
    const request = await fetch(`https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs?keywords=Javascript&locationId=103644278&datePosted=anyTime&experienceLevel=entryLevel&sort=mostRelevant`,{
        method: 'GET',
          headers: {
          'X-RapidAPI-Key': 'a28e09241emshc3367ca6817c8c9p11759bjsn861e18931a20',
          'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
       }})

       if(!request.ok){
        throw new Error('Error happens while loading data');
       }
       const response = await request.json();
       
       const jobList:JobList [] = response.data.map((job:any)=>{
         return{
          id:job.id,
          companyLogo:job.company.logo,
          title:job.title,
          companyName:job.company.name,
          location:job.location,
          jobType:job.type,
          postDate:job.postDate
         }
       })

       return jobList.slice(0,5);
  }
  catch(err){
    if(err instanceof Error){
        console.error(err.message)
    }
    return []
  }
}