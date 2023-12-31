import useToogle from '@/hooks/useToogle';
import {SubMenuContentKey } from '../../../interfaces/SubMenuContent';
import SubMenuGroup from './SubMenuGroup';
import style from './style.module.css';

interface Props{
 item:SubMenuContentKey
}

const SubMenu = ({item}:Props) => {
  const {isToggle,handleToggle} = useToogle();
  
  return (
   <li data-testid="open-submenu" role='listitem' onClick={handleToggle}>
      <div className={style.mobile_menu_item}>
        {item}
        <svg className={`${style.arrow_icon} ${isToggle && style.rotate}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
       
  { isToggle && <SubMenuGroup item={item}/>}
  </li>
  
  )
}

export default SubMenu