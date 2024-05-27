
import DashboardJobGraph from '../DashboardJobGraph/DashboardJobGraph';
import style from './style.module.css';

export const DashboardJobStatstictics = () => {

 return (
    <section className={`widget_box ${style.dashboard_job_statstictics}`}>
       <DashboardJobGraph/>
    </section>
  )
}

export default DashboardJobStatstictics