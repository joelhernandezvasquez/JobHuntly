import { Notifications } from "@/interfaces/Notifications";

export const filterUnreadNotifications = (notifications:Notifications[]) =>{
 
    return notifications.filter((notification)=> !notification.read)
}