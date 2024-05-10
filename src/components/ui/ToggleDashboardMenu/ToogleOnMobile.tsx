
import { useUIStore } from "@/store";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";
import style from './style.module.css';

export const ToogleOnMobile = () => {
    const isDashboardMobileMenuOpen = useUIStore(state => state.isDashboardMobileMenuOpen);
    const openDashboardMobileMenu  = useUIStore(state => state.openDashboardMobileMenu);
    const closeDashboardMobileMenu  = useUIStore(state => state.closeDashboardMobileMenu);
  
    return (
        <div className={style.toogle_on_mobile_container}>
        { !isDashboardMobileMenuOpen 
         ? <OpenMenuButton openMenu={openDashboardMobileMenu}/>
         : <CloseMenuButton closeMenu={closeDashboardMobileMenu}/>
        }
       </div>
  )
}
