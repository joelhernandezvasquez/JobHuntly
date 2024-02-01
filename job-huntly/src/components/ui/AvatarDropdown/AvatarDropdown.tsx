import Link from 'next/link';
import { AuthAdapter } from '@/config/authAdapter';
import ShowAvatar from '../ShowAvatar/ShowAvatar';
import DashboardDivider from '../MenuSideBar/DashboardDivider';
import Logout from '@/components/auth/logout-btn/Logout';
import { FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline, IoNewspaperOutline } from "react-icons/io5";
import style from './style.module.css';

const avatarDropdownMenuLinks = [
  { route:'/profile',icon:<FaRegUser size={18} />, item:'Profile' },
  { route:'/reminders',icon:<IoNotificationsOutline size={18} />, item:'Notifications' },
  { route:'/application',icon:<IoNewspaperOutline size={18} />, item:'Applications' }
] 
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
      {avatarDropdownMenuLinks.map((link)=>{
        return (
        <li key={link.route} className={style.avatar_dropdown_menu_item}>
        <Link href={link.route}> {link.icon} {link.item}</Link>
       </li>
       )
      })}
  
      <li>
        <DashboardDivider/>
      </li>
     
      <li className={style.avatar_dropdown_logout_btn}> <Logout/> </li>
     </ul>
  </aside>
  )
}

export default AvatarDropdown