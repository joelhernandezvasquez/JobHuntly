import { Auth } from "@/interfaces/Auth";

interface RegisterUser {
    fullName:string,
    email:string,
    password:string
}

export const registerUser = async (user:RegisterUser):Promise<Auth>=>{
   try{
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:user.fullName,
            email:user.email,
            password:user.password
        })

      });

      const response = await request.json();
      return response;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error)
            throw new Error(error.message);
           }
           return {} as Auth ;
    }
}