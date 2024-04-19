import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
  children:ReactNode,
  action?:() => void
}
export const ActionModalMenu = ({children}:Props) => {
  return (
    <div className={style.action_modal_menu}>
       <h3>Actions</h3>
       <ul className={style.action_menu}>
        {children}
       </ul>
    </div>
  )
}

ActionModalMenu.Action = function ActionModalMenuItem({children,action}:Props){
  return (
    <li className={style.action_menu_item} onClick={action}>{children}</li>
  )
}
