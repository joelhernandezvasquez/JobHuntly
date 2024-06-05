import { getNotifications } from "@/actions/notifications/getNotifications";
import { AuthAdapter } from "@/config/authAdapter";
import { NotificationAlarm } from "./notification-alarm/NotificationAlarm";
import style from './style.module.css';

const Notification = async () => {
  const userId = await AuthAdapter.getUserId()
  const notifications = await getNotifications(userId);
  return (
    <div className={style.notification_container}>
        <NotificationAlarm notifications={notifications}/>
    </div>
  )
}

export default Notification