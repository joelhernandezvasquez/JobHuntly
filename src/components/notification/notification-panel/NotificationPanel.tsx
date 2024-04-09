import Link from 'next/link';
import { Notifications } from '@/interfaces/Notifications';
import { NotificationCard } from '../notification-card/NotificationCard';
import style from './style.module.css';

interface Props{
  notifications:Notifications[]
}

export const NotificationPanel = ({notifications}:Props) => {
 
  return (
    <aside className={style.notification_wrapper}>
      <div className={style.notification_body}>
      <ul>
        {notifications.map((notification)=>{
          return <NotificationCard key={notification.id} notification={notification}/>
        })}
      </ul>
      </div>
      
      <div className={style.notification_footer}>
        <Link href={'/reminders'}>
         See all notifications
        </Link>
      </div>
    </aside>
  )
}
