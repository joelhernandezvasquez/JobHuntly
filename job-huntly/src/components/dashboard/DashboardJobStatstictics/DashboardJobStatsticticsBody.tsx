'use client';

import { useState } from 'react';
import { TimeUnit } from '@/types';
import { getJobStatisticsFrequencyMessage } from '@/utils/getJobStatisticsFrequencyMessage';
import Tabs from '@/components/ui/Tabs/Tabs';
import LegendLabel from '@/components/ui/LegendLabel/LegendLabel';
import { DonutsChart } from '../JobStatasticsChart/DonutsChart';
import style from './style.module.css';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

interface Props{
  // TODO:need to type this prop
  totalApplicationByFrequency:any []
}
// TODO:place this array info in a data constant file
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
// TODO: unnecesary Prop Drilling for totalApplicationByFrequency
const DashboardJobStatsticticsBody = ({totalApplicationByFrequency}:Props) => {
  // TODO:Refactor the useState usage probably not needed
  const searchParams = useSearchParams();
  const frequencyState = (searchParams.get('frequency') ?? 'Week') as TimeUnit
 const [activeTab,setActiveTab] = useState<TimeUnit>(frequencyState);
 const {replace} = useRouter();
 const pathName= usePathname();

 const toggleTab = (tab:TimeUnit) =>{
    setActiveTab(tab);
    replace(`${pathName}?frequency=${tab}`);
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
                      className={`${style.tabs_tab_item} ${tab.item=== activeTab && style.active}`}
                      onClick={() => toggleTab(tab.item as TimeUnit)}
                      >
                      {tab.item}
                    </li>)
            })}
          </Tabs>  
         </div>
      </div>

      <LegendLabel>
        <LegendLabel.LegentLabelItem legendColor='#3B81F6'>
            <p>Application Sent</p>
        </LegendLabel.LegentLabelItem>

        <LegendLabel.LegentLabelItem legendColor='#6366F1'>
            <p>Interviews</p>
        </LegendLabel.LegentLabelItem>

        <LegendLabel.LegentLabelItem legendColor='#05B6D3'>
            <p>Rejected</p>
        </LegendLabel.LegentLabelItem>

     </LegendLabel>

      <DonutsChart applications={totalApplicationByFrequency}/>
      </>
    
  )
}

export default DashboardJobStatsticticsBody