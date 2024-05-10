import { useUIStore } from "@/store";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";
import style from './style.module.css';


export const ToogleOnDesktop = () => {
    const isDashboardDesktopMenuOpen = useUIStore(state => state.isDashboardDesktopMenuOpen);
    const openDashboardDesktopMenu  = useUIStore(state => state.openDashboardDesktopMenu);
    const closeDashboardDesktopMenu  = useUIStore(state => state.closeDashboardDesktopMenu );
  
  return (
    <div className={style.toogle_on_desktop_container}>
        { !isDashboardDesktopMenuOpen
         ? <OpenMenuButton openMenu={openDashboardDesktopMenu}/>
         : <CloseMenuButton closeMenu={closeDashboardDesktopMenu}/>
        }
       </div>
  )
}
