

import { useEffect, useState } from "react";
import {Frequency, TimeUnit} from "@/types";
import { getTotalApplicationByFrequency } from '@/actions/dashboard/getTotalApplicationByFrequency';
import { AuthAdapter } from '@/config/authAdapter';
import { DonutChart, AreaChart} from '@tremor/react';
import style from './style.module.css';
import {CardSkeleton } from "@/components";

interface Props{
  frequencyState:TimeUnit
}

export function DonutsChart({frequencyState}:Props) {
   const [applications,setApplications] = useState<Frequency>([]);

   useEffect(()=>{
     const getApplication = async() =>{
       try{
         const request = await getTotalApplicationByFrequency(AuthAdapter.getUserId() as string,frequencyState)
          setApplications(request)
         }

       catch(err){
        console.log(err);
       }
     }
     getApplication();
   },[frequencyState])

   if(applications.length === 0){
    return <CardSkeleton/>
   }
    return (
    <>
      { frequencyState!=='Day' ?  
       
       <AreaChart
        className={style.area_chart_container}
        data={applications}
        index="date"
        yAxisWidth={65}
        categories={['Application Sent',
        'Interview',
        'Rejected']}
        colors={['blue','indigo','cyan']}
       />
       :
       <DonutChart
        data={applications}
        category="total"
        index="name"
        colors={['blue','indigo','cyan']}
        className={style.container}
     />
  }
    </>
  );
}

