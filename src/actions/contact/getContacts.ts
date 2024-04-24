import { filterLastItems } from '@/utils/FilterLastItems';
import {Contact} from '../../interfaces/Contact';

export const getContacts = async(userId:string):Promise<Contact[]>=>{
 
 try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/${userId}`);

    if(!request.ok){
        throw new Error('Error happens while getting contacts');
    }
  
    const contacts = await request.json();
    return filterLastItems(contacts,5);
 }
 catch(error){
    if(error instanceof Error){
     throw new Error('Error while getting contacts');
    }
    return []
 }
 
    
}