
import style from './style.module.css';
import ShowAvatar from '../ShowAvatar/ShowAvatar';
import DashboardDivider from '../MenuSideBar/DashboardDivider';
import Link from 'next/link';
import Logout from '@/components/auth/logout-btn/Logout';
import { FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline, IoNewspaperOutline } from "react-icons/io5";
import { AuthAdapter } from '@/config/authAdapter';

const AvatarDropdown = async () => {
  
  const user = await AuthAdapter.getUserSessionInfo();
  
  return (
  <aside className={style.avatar_dropdown_container}>
     <div className={style.avatar_dropdown_header}>
      <ShowAvatar user={user}/>
        <div className={style.avatar_dropdown_info}>
          <p className={style.avatar_dropdown_user_info}>{user.name}</p>
          <span className={style.avatar_dropdown_email}>{user.email}</span>
        </div>
      </div>

     <DashboardDivider/>

     <ul className={style.avatar_dropdown_menu}>
      <li className={style.avatar_dropdown_menu_item}>
        <Link href="/profile"> <FaRegUser size={18} /> Profile </Link>
      </li>

      <li className={style.avatar_dropdown_menu_item}>
        <Link href="/reminders"> <IoNotificationsOutline size={18} /> Notifications </Link>
      </li>

      <li className={style.avatar_dropdown_menu_item}>
       <Link href="/application"> <IoNewspaperOutline size={18} /> Applications</Link>
      </li>
     <li>
      <DashboardDivider/>
     </li>
     
      <li className={style.avatar_dropdown_logout_btn}> <Logout/> </li>
     </ul>
     
      
  </aside>
  )
}

export default AvatarDropdown