import { getJobStatisticsFrequencyMessage } from '@/utils/getJobStatisticsFrequencyMessage';
import Tabs from '@/components/ui/Tabs/Tabs';
import style from './style.module.css';

const tabArray = [
    {
      id:0,
      item:'Week',
    },
    {
      id:1,
      item:'Day',
    },
    {
      id:2,
      item:'Month',
    },
  
  ]

const DashboardJobStatsticticsBody = () => {
  return (
    <>
    <div className={style.header}>
         <div>
             <h2 className={style.headline}>Job statistics</h2>
             <p className={style.filter_frequency_text}>
               Showing statistics {getJobStatisticsFrequencyMessage('Week')}
            </p>
         </div>

         <div className={style.tabs_wrapper}>
           <Tabs>
            {tabArray.map((tab)=>{
             return (<Tabs.TabsItem key={tab.id}>{tab.item}</Tabs.TabsItem>)
            })}
          </Tabs>  
         </div>
      </div>

        <div>
        {/* TODO:Char goes here */}
        </div>
        </>
  )
}

export default DashboardJobStatsticticsBody