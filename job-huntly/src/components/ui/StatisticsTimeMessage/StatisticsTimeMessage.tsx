
import { getJobStatisticsFrequencyMessage } from '@/utils/getJobStatisticsFrequencyMessage';
import { TimeUnit } from '@/types';
import style from './style.module.css';

interface Props{
    frequencyState:TimeUnit
}

const StatisticsTimeMessage = ({frequencyState}:Props) => {
  return (
    <div>
        <h2 className={style.headline}>Job statistics</h2>
             <p className={style.filter_frequency_text}>
               Statistics {getJobStatisticsFrequencyMessage(frequencyState)}
            </p>
    </div>
  )
}

export default StatisticsTimeMessage