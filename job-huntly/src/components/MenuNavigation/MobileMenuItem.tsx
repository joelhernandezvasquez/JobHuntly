
import Link from 'next/link';
import SubMenu from './SubMenu';
import { MobileMenuLinks } from '@/helper/interfaces/MobileMenuLink';
import style from './style.module.css';

interface Props{
    mobileLink:MobileMenuLinks
}
const MobileMenuItem = ({mobileLink}:Props) => {
  return (
   <>
    { mobileLink.hasSubMenu 
      ? <SubMenu item={mobileLink.item}/>
      : <li className={style.mobile_menu_item}> <Link href={'/'}>  {mobileLink.item} </Link></li>}
   </>
   
  )
}

export default MobileMenuItem