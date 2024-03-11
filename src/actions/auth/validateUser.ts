

export const validateUser = async(email:string):Promise<Boolean> =>{

    try{
      const request  = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/validate-user`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email
        })
      });

      if(!request.ok){
          throw new Error('Error happens while validating user');  
      }

      const response = await request.json();
      return response;
    }
    catch(err){
        if(err instanceof Error){
            console.log(err.message);
            throw new Error(err.message);
        }
        return false;
    }
}