'use client';

import {ReactNode} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import { TimeUnit } from '@/types';
import Tabs from '@/components/ui/Tabs/Tabs';
import LegendLabelList from '@/components/ui/LegendLabelList/LegendLabelList';
import StatisticsTimeMessage from '@/components/ui/StatisticsTimeMessage/StatisticsTimeMessage';
import { frequencyOptions } from '@/helper/data/weekFrequency';
import style from './style.module.css';
interface Props{
  children:ReactNode
}

const DashboardJobStatsticticsBody = ({children}:Props) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathName= usePathname();
  let frequencyState = (searchParams.get('frequency') ?? 'Week') as TimeUnit;

 const toggleTab = (tab:TimeUnit) =>{
    frequencyState = tab;
    replace(`${pathName}?frequency=${tab}`);
 }

  return (
    <>
    <div className={style.header}>
      <StatisticsTimeMessage frequencyState={frequencyState}/>

         <div className={style.tabs_wrapper}>
           <Tabs>
            {frequencyOptions.map((tab)=>{
             return (<li key={tab.id} 
                      className={`${style.tabs_tab_item} ${tab.label=== frequencyState && style.active}`}
                      onClick={() => toggleTab(tab.label as TimeUnit)}
                      >
                      {tab.label}
                    </li>)
            })}
          </Tabs>  
         </div>
      </div>
      
      {frequencyState === 'Day' && <LegendLabelList/>}
      
      {children}
      </>
  )
}
export default DashboardJobStatsticticsBody