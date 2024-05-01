import {Contact} from '../../interfaces/Contact';

export const getContact = async(userId:string,contactId:string):Promise<Contact | null>=>{
 
 try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/${userId}/${contactId}`);

    if(!request.ok){
        console.error(request);
        return null;
    }

    return await request.json();
 }
 catch(error){
    if(error instanceof Error){
     throw new Error('Error while getting contacts');
    }
    return {} as Contact;
 }
 
    
}