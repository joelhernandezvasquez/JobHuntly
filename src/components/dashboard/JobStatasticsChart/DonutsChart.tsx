import { DonutChart, AreaChart} from '@tremor/react';
import { Frequency, TimeUnit } from "@/types";
import style from './style.module.css';
interface Props{
  frequencyFilterSelection:TimeUnit,
  applications:Frequency
}

export function DonutsChart({frequencyFilterSelection,applications}:Props) {
 
    return (
    <>
      { frequencyFilterSelection!=='Day' ?  
       
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

