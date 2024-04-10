import { getNotifications } from "@/actions/notifications/getNotifications";
import { AuthAdapter } from "@/config/authAdapter";
import style from './style.module.css';
import { NotificationAlarm } from "./notification-alarm/NotificationAlarm";

const Notification = async () => {

  const notifications = await getNotifications(AuthAdapter.getUserId()!);
  return (
    <div className={style.notification_container}>
        <NotificationAlarm notifications={notifications}/>
    </div>
  )
}

export default Notification