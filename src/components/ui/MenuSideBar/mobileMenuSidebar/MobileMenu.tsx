'use client';
import { useUIStore } from '@/store';
import CompanyLogo from '@/components/ui/companyLogo/CompanyLogo';
import MaxWidthWrapper from '../../MaxWidthWrapper/MaxWidthWrapper';
import MenuSidebarDashboardItemsGroup from '../MenuSidebarDashboardItemsGroup';
import { BlurBackground } from '../../blur-background/BlurBackground';
import style from '../style.module.css';

const MobileMenuSidebar = () => {
 const isDashboardMobileMenuOpen = useUIStore(state => state.isDashboardMobileMenuOpen);
 const closeDashboardMobileMenu = useUIStore(state => state.closeDashboardMobileMenu);

 return (
  <>
    <aside className={`${style.menu_side_bar_wrapper} ${style.mobile_menu} ${ isDashboardMobileMenuOpen && style.menu_side_bar_wrapper_open  }`} tabIndex={-1} >
      <MaxWidthWrapper>
         <CompanyLogo theme='light'/>
         <MenuSidebarDashboardItemsGroup dividerInterval={4}/> 
      </MaxWidthWrapper>
    </aside>
    {isDashboardMobileMenuOpen  &&  <BlurBackground callback={closeDashboardMobileMenu}/>} 
    </>
  )
}

export default MobileMenuSidebar