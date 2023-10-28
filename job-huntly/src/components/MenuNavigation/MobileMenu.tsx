
import MobileMenuItem from './MobileMenuItem';
import { mobileMenuLinks } from '@/helper/data/mobileMenuLinks';
import style from './style.module.css';

const MobileMenu = () => {
    return (
        <ul className={style.mobile_menu} role='list'>
            {mobileMenuLinks.map((mobileLink) => {
                return (
                    <MobileMenuItem key={mobileLink.item} mobileLink = {mobileLink}/>
                )
            })}
        </ul>
    )
}
export default MobileMenu;