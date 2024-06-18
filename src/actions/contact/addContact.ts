import { Contact } from "@/interfaces/Contact";

export const addContact = async(userId:string,contact:any):Promise<any> =>{
   
    try{
        const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/create`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userId:userId,
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

        const response = await request.json();
        return response;
    }
    
    catch(error){
        if(error instanceof Error){
            throw new Error('Error while getting contacts');
           }
           return {} as Contact;
    }
}