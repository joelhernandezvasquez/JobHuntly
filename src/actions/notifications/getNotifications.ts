import { Notifications } from "@/interfaces/Notifications";
import { filterUnreadNotifications } from "@/utils/filterUnreadNotifications";

export const getNotifications = async (userId:string):Promise<Notifications[]>=> {
     try{
        const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/notification/notifications/:${userId}`);
        
        if(!request.ok){
            throw new Error('Error happens while getting the notifications information');
        }

        const notifications = await request.json();
        return filterUnreadNotifications(notifications);
    }
     catch(err){
        if(err instanceof Error){
          throw Error(err.message);
        }
        return [];

     }
}