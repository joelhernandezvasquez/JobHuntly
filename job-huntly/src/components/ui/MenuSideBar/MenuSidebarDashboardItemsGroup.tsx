'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import useMenuSideBarDashboardItems from '@/hooks/useMenuSideBarDashboardItems';
import MenuSideDashboardItem from './MenuSideDashboardItem';
import DashboardDivider from './DashboardDivider';
import style from './style.module.css';

interface Props{
  dividerInterval?:number
}

const MenuSidebarDashboardItemsGroup = ({dividerInterval}:Props) => {
    const path = usePathname();
    const {dashboardMenuLinks} = useMenuSideBarDashboardItems();
   
  return (
    <nav>
        <ul className={style.dashboard_items_container}>
          {dashboardMenuLinks.map((link,index)=>{
          return (
            <Fragment key={link.id}>
              <MenuSideDashboardItem link = {link} path = {path}/>
              { dividerInterval && ((index+1) % dividerInterval === 0 && <DashboardDivider/>)}
             </Fragment>
             )
          })}  
        </ul>
    </nav>
  )
}

export default MenuSidebarDashboardItemsGroup