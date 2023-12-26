import { Auth } from "@/interfaces/Auth";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";


export const authenticateUser = async (email:string,password:string):Promise<Auth>=>{
  try{

    const request = await fetch(`http://localhost:4000/api/auth/login`,{
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

export const showLoginErrors = (loginError:Auth) =>{
    if(loginError.errors){
        Object.values(loginError.errors).forEach((entry:any)=>{
         if(entry.msg){
             toast.error(`${entry.msg}`,{
            position:'top-center',
              role:'alert'
            })
         }
           
        })
        if(loginError.errors.message){
          toast.error(`${loginError.errors.message}`,{
            position:'top-center',
              role:'alert'
            })
     
         }

       }
}