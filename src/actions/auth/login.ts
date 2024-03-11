import { Auth } from "@/interfaces/Auth";
import { signIn } from "next-auth/react";

export const authenticateUser = async (email:string,password:string):Promise<Auth>=>{
  try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    })

    const response = await request.json();
    
    return response;
  }
  catch(error){
   if(error instanceof Error){
    console.log(error)
   }
   return {} as Auth ;
  }
}

export const signInUser = async (email:string,password:string) =>{
    return await signIn("credentials",{
        email:email,
        password:password,
        callbackUrl:'/dashboard'
      });
}