

export const getDashboardApplicationStats = async (userID:string) =>{
  try{
    // testing purposes
    await new Promise((resolve) => {
      setTimeout(resolve, 3000); // Delay the execution of resolve() by 2 seconds
  });
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/application-stats/${userID}`);
    
    if(!request.ok){
       console.log(request)
        throw new Error(`Error happens while getting user Dashboard stats information.`);
    }

    const response = await request.json();
    return response;
}
  catch(err){
   if(err instanceof Error){
      throw Error(`${err.message}`);
   }
   console.log(err);
  }
}