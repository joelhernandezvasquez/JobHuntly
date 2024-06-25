
import { getUserId } from "../auth/getUserId";

export const deleteContact = async (contactId:string,email:string) =>{
  
    try{
        const userRequest = await getUserId(email);

      if(!userRequest.userId){
        return {
            ok:false,
            message:'User ID not found'
        }
      }
      const userId = userRequest.userId;
      
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/delete/${userId}/${contactId}`,{
        method:'DELETE',
        headers:{
          "Content-Type":"application/json"},
      });
      
      if(!request.ok){
        return{
            ok:false,
            message:request
        }
      }

      return await request.json();

    }
    catch(error){
        if(error instanceof Error){
            console.log(error)
            throw new Error('Error while getting contacts');
        }
    }
}