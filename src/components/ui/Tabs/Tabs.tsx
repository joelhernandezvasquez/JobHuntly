
import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
}
const Tabs = ({children}:Props) => {
  return (
    <div className={style.tabs_container}>
       <ul className={style.tabs_menu}>
        {children}
       </ul>
    </div>
  )
}
Tabs.TabsItem = function TabsItem({children}:Props){
    return(
        <li className={style.tabs_tab_item}>{children}</li>
    )
}

export default Tabs