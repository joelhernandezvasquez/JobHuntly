'use client';

import { useUIStore } from '@/store';
import DashboardJobStatsticticsBody from '../DashboardJobStatstictics/DashboardJobStatsticticsBody';
import { DonutsChart } from '../JobStatasticsChart/DonutsChart';

const DashboardJobGraph = () => {
    const frequencyState = useUIStore(state => state.applicationTimeFilter);
  
   return (
   <>
        <DashboardJobStatsticticsBody frequencyState={frequencyState}/>
        <DonutsChart frequencyState={frequencyState}/>
   </>
  )
}

export default DashboardJobGraph