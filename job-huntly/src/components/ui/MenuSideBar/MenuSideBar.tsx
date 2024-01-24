'use client'
import { useUIStore } from '@/store';
import CompanyLogo from '@/components/companyLogo/CompanyLogo';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import MenuSidebarDashboardItemsGroup from './MenuSidebarDashboardItemsGroup';
import style from './style.module.css';

const MenuSideBar = () => {
 const isDashboardMenuOpen = useUIStore(state => state.isDashboardMenuOpen);
  
  return (
    <aside className={`${style.menu_side_bar_wrapper} ${ isDashboardMenuOpen && style.menu_side_bar_wrapper_open  }`}>
      <MaxWidthWrapper>
         <CompanyLogo theme='light'/>
         <MenuSidebarDashboardItemsGroup dividerInterval={4}/>
      </MaxWidthWrapper>
    </aside>
  )
}

export default MenuSideBar