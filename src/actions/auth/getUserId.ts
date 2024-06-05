
export const getUserId = async (email:string) =>{

    try{
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/getId/${email}`);
      
      if(!request.ok){
        console.error(request);
    }
    return await request.json();
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message)
            throw new Error('Error while getting contacts');
        }
    }
}