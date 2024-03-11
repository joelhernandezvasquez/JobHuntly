import { Auth } from "@/interfaces/Auth";
import { toast } from "react-toastify";

export const showValidationErrors = (entityError:Auth) =>{
    if(entityError.errors){
        Object.values(entityError.errors).forEach((entry:any)=>{
         if(entry.msg){
             toast.error(`${entry.msg}`,{
            position:'top-center',
              role:'alert'
            })
         }
           
        })
        if(entityError.errors.message){
          toast.error(`${entityError.errors.message}`,{
            position:'top-center',
              role:'alert'
            })
         }
       }
}