
'use client';
import { useUIStore } from '@/store';
import CompanyLogo from '@/components/ui/companyLogo/CompanyLogo';
import MaxWidthWrapper from '../../MaxWidthWrapper/MaxWidthWrapper';
import MenuSidebarDashboardItemsGroup from '../MenuSidebarDashboardItemsGroup';
import style from '../style.module.css';
import desktop from './desktop.module.css';

const DesktopMenu = () => {
 const isDashboardMenuOpen = useUIStore(state => state.isDashboardMenuOpen);

 return (
  <>
    <aside className={`${desktop.menu_side_desktop_bar_wrapper} ${style.desktop_menu}`} tabIndex={-1} >
      <MaxWidthWrapper>
         <CompanyLogo theme='light'/>
         <MenuSidebarDashboardItemsGroup dividerInterval={4}/> 
      </MaxWidthWrapper>
    </aside>
    </>
  )
}

export default DesktopMenu