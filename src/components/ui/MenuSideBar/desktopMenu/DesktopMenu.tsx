
'use client';
import { useUIStore } from '@/store';
import CompanyLogo from '@/components/ui/companyLogo/CompanyLogo';
import MaxWidthWrapper from '../../MaxWidthWrapper/MaxWidthWrapper';
import MenuSidebarDashboardItemsGroup from '../MenuSidebarDashboardItemsGroup';
import style from '../style.module.css';
import desktop from './desktop.module.css';

const DesktopMenu = () => {
 const isDashboardDesktopMenuOpen = useUIStore(state => state.isDashboardDesktopMenuOpen);

 return (
  <>
    <aside className={`${desktop.menu_side_desktop_bar_wrapper} ${style.desktop_menu} ${!isDashboardDesktopMenuOpen && desktop.collapse_menu}`} tabIndex={-1} >
      <MaxWidthWrapper>
         <CompanyLogo theme='light'/>
         <MenuSidebarDashboardItemsGroup dividerInterval={4}/> 
      </MaxWidthWrapper>
    </aside>
    </>
  )
}

export default DesktopMenu