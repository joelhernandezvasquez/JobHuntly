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
1 - [x] make different change on the back-end and simulate filtering from the endpoint based on frequency
 2-  [x] compose the client components and refactoring
 3 - [x] data needs to be reformatted for the data chart that only accepts array
 4 - suspense the donut chart component and fix how data will be presented
*/

  return (
    <section className={style.wrapper}>
        <DashboardJobStatsticticsBody>
          <DonutsChart applications={totalApplicationByFrequency}/>
        </DashboardJobStatsticticsBody>
    </section>
  )
}

export default DashboardJobStatstictics