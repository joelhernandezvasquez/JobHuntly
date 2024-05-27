'use client';

import { useUIStore } from '@/store';
import { TimeUnit } from '@/types';
import Tabs from '@/components/ui/Tabs/Tabs';
import LegendLabelList from '@/components/ui/LegendLabelList/LegendLabelList';
import StatisticsTimeMessage from '@/components/ui/StatisticsTimeMessage/StatisticsTimeMessage';
import { frequencyOptions } from '@/helper/data/weekFrequency';
import style from './style.module.css';

interface Props{
  frequencyState:TimeUnit,
}

const DashboardJobStatsticticsBody = ({frequencyState}:Props) => {

  const updateFrequencyState = useUIStore(state => state.updateApplicationTimeFilter);
  
  return (
    <>
    <div className={style.header}>
      <StatisticsTimeMessage frequencyState={frequencyState}/>

         <div className={style.tabs_wrapper}>
           <Tabs>
            {frequencyOptions.map((tab)=>{
             return (<li key={tab.id} 
                      className={`${style.tabs_tab_item} ${tab.label=== frequencyState && style.active}`}
                      onClick={() => updateFrequencyState(tab.label as TimeUnit)}
                      >
                      {tab.label}
                    </li>)
            })}
          </Tabs>  
         </div>
      </div>
      
      {frequencyState === 'Day' && <LegendLabelList/>}
      </>
  )
}
export default DashboardJobStatsticticsBody