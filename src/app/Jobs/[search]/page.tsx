
interface Props{
  params:{search:string}
}

const fetchJobs = async (keyword:string) =>{
  try{
     const request = await fetch(`https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs?keywords=${keyword}&locationId=103644278&datePosted=anyTime&experienceLevel=entryLevel&sort=mostRelevant`,{
      method: 'GET',
	    headers: {
        'X-RapidAPI-Key': 'a28e09241emshc3367ca6817c8c9p11759bjsn861e18931a20',
        'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
     }})

     if(!request.ok){
      throw new Error('Error while fetching jobs');
     }

     const response = await request.json();
     return response.data;
  }
  catch(error){
    if(error instanceof Error){
      console.log(error.message);
    }
  }
}

const search = async ({params}:Props) => {
  
 //const jobs = await fetchJobs(params.search);
  
  return (
    <div>jobs</div>
    // <div>{JSON.stringify(jobs)}</div>
  )
}

export default search