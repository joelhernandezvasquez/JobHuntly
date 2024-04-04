import { getNotifications } from "@/actions/notifications/getNotifications";
import { AuthAdapter } from "@/config/authAdapter";
import { IoNotificationsOutline } from "react-icons/io5";
import style from './style.module.css';

const Notification = async () => {

  const notifications = await getNotifications(AuthAdapter.getUserId()!);

  return (
    <div className={style.notification_container}>
        
        {notifications.length > 0 &&(
          <div className={style.notification_count}>
          <span>{notifications.length}</span>
          </div>
        )}
  
        <IoNotificationsOutline size={20}/>
    </div>
  )
}

export default Notification