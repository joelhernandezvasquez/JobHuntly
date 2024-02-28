import { AuthAdapter } from '@/config/authAdapter';
import { getTotalApplicationByFrequency } from '@/actions/dashboard/getTotalApplicationByFrequency';
import { TimeUnit } from '@/types';
import DashboardJobStatsticticsBody from './DashboardJobStatsticticsBody';
import { DonutsChart } from '../JobStatasticsChart/DonutsChart';
import style from './style.module.css';

interface Props{
 filteredfrequency:TimeUnit
}

const DashboardJobStatstictics = async ({filteredfrequency}:Props) => {
 const totalApplicationByFrequency = await getTotalApplicationByFrequency(AuthAdapter.getUserId() as string,filteredfrequency);

/* Steps 
 1 - [] the chart component and fix how data will be presented
 2 - suspense the component cause it takes long time to load
 3 - to fix the refetching of the rest of components
 4 - types
 5 - last check to all components
*/

  return (
    <section className={style.wrapper}>
        <DashboardJobStatsticticsBody>
          <DonutsChart 
           frequencyFilterSelection = {filteredfrequency}
           applications={totalApplicationByFrequency}
           />
        </DashboardJobStatsticticsBody>
    </section>
  )
}

export default DashboardJobStatstictics