import { Notifications } from '@/interfaces/Notifications';
import { IoHomeOutline } from 'react-icons/io5';
import { CalendarUtils } from '@/utils/date.utils';
import style from './style.module.css';

interface Props{
    notification:Notifications
}

export const NotificationCard = ({notification}:Props) => {
   const dateCreated = CalendarUtils.getDayMonthYear(notification.createdAt.toString());
  
    return (
    <li className={style.notification_card}>
       <div className={style.notification_avatar_type}>
         <IoHomeOutline size={25} color={'#2adb7b'}/>
       </div>

       <div className={style.notification_info}>
        <p>{notification.message}</p>
        <span className={style.date_created}>{dateCreated}</span>
       </div>
    </li>
  )
}
