import { logoutUser } from "@/actions/auth/logout";
import { TbLogout } from "react-icons/tb";
import style from '../auth.module.css';

const Logout = () => {
  return (
    <button className={style.logout_btn} onClick={logoutUser}>
        <TbLogout size={24}/>
       <span>Logout</span>
    </button>
  )
}

export default Logout