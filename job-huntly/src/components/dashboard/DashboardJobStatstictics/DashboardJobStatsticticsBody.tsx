'use client';

import { useState } from 'react';
import { TimeUnit } from '@/types';
import { getJobStatisticsFrequencyMessage } from '@/utils/getJobStatisticsFrequencyMessage';
import Tabs from '@/components/ui/Tabs/Tabs';
import style from './style.module.css';

const tabArray = [
    {
      id:0,
      item:'Week',
    },
    {
      id:1,
      item:'Day',
    },
    {
      id:2,
      item:'Month',
    },
  
  ]

const DashboardJobStatsticticsBody = () => {
 const [activeTab,setActiveTab] = useState<TimeUnit>('Week');

 const toggleTab = (tab:TimeUnit) =>{
    setActiveTab(tab);
 }

  return (
    <>
    <div className={style.header}>
         <div>
             <h2 className={style.headline}>Job statistics</h2>
             <p className={style.filter_frequency_text}>
               Showing statistics {getJobStatisticsFrequencyMessage(activeTab)}
            </p>
         </div>


         <div className={style.tabs_wrapper}>
           <Tabs>
            {tabArray.map((tab)=>{
             return (<li key={tab.id} 
                      className={`${style.tabs_tab_item} ${tab.item === activeTab && style.active}`}
                      onClick={() => toggleTab(tab.item as TimeUnit)}
                      >
                      {tab.item}
                    </li>)
            })}
          </Tabs>  
         </div>
      </div>

        <div>
        {/* TODO:Char goes here */}
        </div>
        </>
  )
}

export default DashboardJobStatsticticsBody