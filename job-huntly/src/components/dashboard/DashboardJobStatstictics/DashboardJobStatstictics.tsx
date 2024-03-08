import { AuthAdapter } from '@/config/authAdapter';
import { getTotalApplicationByFrequency } from '@/actions/dashboard/getTotalApplicationByFrequency';
import { TimeUnit } from '@/types';
import DashboardJobStatsticticsBody from './DashboardJobStatsticticsBody';
import { DonutsChart } from '../JobStatasticsChart/DonutsChart';


interface Props{
 filteredfrequency:TimeUnit
}

const DashboardJobStatstictics = async ({filteredfrequency}:Props) => {
 const totalApplicationByFrequency = await getTotalApplicationByFrequency(AuthAdapter.getUserId() as string,filteredfrequency);

  return (
    <section className={'widget_box'}>
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