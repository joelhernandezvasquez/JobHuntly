
import { getTotalApplicationByFrequency } from '@/actions/dashboard/getTotalApplicationByFrequency';
import DashboardJobStatsticticsBody from './DashboardJobStatsticticsBody';
import { AuthAdapter } from '@/config/authAdapter';
import style from './style.module.css';
import { TimeUnit } from '@/types';

interface Props{
  // TODO: Need a better name for this variable
 frequency:TimeUnit
}

const DashboardJobStatstictics = async ({frequency}:Props) => {
 const totalApplicationByFrequency = await getTotalApplicationByFrequency(AuthAdapter.getUserId() as string,frequency);

/* Steps 
1 - [x] make different change on the back-end and simulate filtering from the endpoint based on frequency
 2-  [] compose the client components and refactoring
 3 - [x] data needs to be reformatted for the data chart that only accepts array
 4 - suspense the donut chart component and fix how data will be presented
*/

  return (
    <section className={style.wrapper}>
        <DashboardJobStatsticticsBody totalApplicationByFrequency={totalApplicationByFrequency}/>
    </section>
  )
}

export default DashboardJobStatstictics