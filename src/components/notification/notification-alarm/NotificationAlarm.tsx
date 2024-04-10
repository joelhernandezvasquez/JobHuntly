'use client';
import { Notifications } from "@/interfaces/Notifications";
import { IoNotificationsOutline } from "react-icons/io5";
import { NotificationPanel } from "../notification-panel/NotificationPanel";
import { useUIStore } from '@/store';
import { BlurBackground } from "@/components";
import style from './style.module.css';

interface Props{
    notifications:Notifications[]
  }

export const NotificationAlarm = ({notifications}:Props) => {
 const isNotificationPanelOpen = useUIStore(state => state.isNotificationPanelOpen); 
 const openNotificationPanel = useUIStore(state => state.openNotificationPanel);
 const closeNotificationPanel = useUIStore(state => state.closeNotificationPanel);

 const onClickNotificationIcon = () =>{
    isNotificationPanelOpen ? closeNotificationPanel() : openNotificationPanel();
 }

 return (
    <>
    <IoNotificationsOutline size={20} onClick ={onClickNotificationIcon}/>

    {notifications.length > 0 &&(
        <div className={style.notification_count}>
        <span>{notifications.length}</span>
        </div>  
     )} 

     {isNotificationPanelOpen &&(
      <>
      <NotificationPanel notifications={notifications} />
      <BlurBackground callback={closeNotificationPanel} />
      </>
     )
     }
    </>
  )

}
