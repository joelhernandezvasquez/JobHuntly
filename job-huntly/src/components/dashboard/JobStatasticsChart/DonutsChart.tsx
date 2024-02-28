import { DonutChart, AreaChart} from '@tremor/react';
import { TimeUnit } from '@/types';
import style from './style.module.css';

interface Props{
  frequencyFilterSelection:TimeUnit,
  //TODO:Need to type data
  applications:any []
}

/*TODO:
 1 -  [x] Simulate how component will look like based on the frequency selected
 2 -  [x] need to show the donut and area chart conditional
 3 -  [] need to transform the data to align with area and donut charts.
        [x] a. Weekly
         [x] b. Monthly
 4 -  [] need to show the legend only for donut chart
 5 -  fix the styling of the charts(font size,color,padding, etc..)
*/

export function DonutsChart({frequencyFilterSelection,applications}:Props) {
 
    return (
    <>
      {/* <div className="flex items-center justify-center space-x-6"> */}
      { frequencyFilterSelection!=='Day' ?  
       
       <AreaChart
        className="mt-4 h-72"
        data={applications}
        index="date"
        yAxisWidth={65}
        categories={['Application Sent',
        'Interview',
        'Rejected']}
        colors={['indigo', 'cyan','blue']}
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

