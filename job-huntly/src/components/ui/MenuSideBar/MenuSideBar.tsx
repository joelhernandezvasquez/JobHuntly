
import CompanyLogo from '@/components/companyLogo/CompanyLogo';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import MenuSidebarDashboardItemsGroup from './MenuSidebarDashboardItemsGroup';
import style from './style.module.css';

const MenuSideBar = () => {
  return (
    <aside className={style.menu_side_bar_wrapper}>
      <MaxWidthWrapper>
         <CompanyLogo theme='light'/>
         <MenuSidebarDashboardItemsGroup dividerInterval={4}/>
      </MaxWidthWrapper>
    </aside>
  )
}

export default MenuSideBar