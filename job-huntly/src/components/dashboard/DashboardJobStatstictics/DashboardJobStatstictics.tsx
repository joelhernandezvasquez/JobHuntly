
import { getJobStatisticsFrequencyMessage } from '@/utils/getJobStatisticsFrequencyMessage';
import style from './style.module.css';

const DashboardJobStatstictics = () => {
  return (
    <section className={style.wrapper}>

      <div className={style.header}>
         <div>
             <h2 className={style.headline}>Job statistics</h2>
             {/* TODO:This part need to be dinamic */}
             <p className={style.filter_frequency_text}>Showing statistics {getJobStatisticsFrequencyMessage('Daily')}</p>
         </div>

         <div>

         </div>

      </div>
        
    </section>
  )
}

export default DashboardJobStatstictics