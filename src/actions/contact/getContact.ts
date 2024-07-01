import {ContactResponse} from '../../interfaces/Contact';

export const getContact = async(userId:string,contactId:string):Promise<ContactResponse | null>=>{
 
 try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/get/${userId}/${contactId}`);

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
    return {} as ContactResponse;
 }
 
    
}