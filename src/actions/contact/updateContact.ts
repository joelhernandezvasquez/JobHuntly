import { Contact } from "@/interfaces/Contact";

export const updateContact = async (userId:string,contact:Contact) =>{
 
    try{
          const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/update/${userId}/${contact.contactId}`,{
            method:'PUT',
            headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
            firstName:contact.firstName,
            lastName:contact.lastName,
            email:contact.email,
            phone:contact.phone,
            role:contact.role,
            company:contact.company,
            notes:contact.notes ?? '',
            avatar:contact.avatar ?? ''
        })
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