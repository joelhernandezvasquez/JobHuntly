import Link from "next/link";
import { ReactNode } from "react"
import style from './style.module.css';


interface Prop{
path:string,

 link:{
    id:string,
    item:string,
    route:string,
    icon:ReactNode
 }
}

const MenuSideDashboardItem = ({link,path}:Prop) => {
  return (
  <li className={style.dashboard_item}>
             <Link href={link.route} className={`${style.dashboard_menu_item} ${path === link.route && style.dashboard_current_path_active}`}>
             <span className={style.dashboard_icons}>{link.icon}</span>
              <p className={style.dashboard_item_text}>{link.item}</p>
            </Link>
            {path === link.route &&  <div className={style.dashboard_current_path_active_indicator}></div>}
  </li>
  )
}

export default MenuSideDashboardItem