import { ApplicationHistoryCard } from "@/components/application";
import { getApplications } from "@/actions/applications/getApplications";
import { AuthAdapter } from "@/config/authAdapter";
import style from './style.module.css';

export const JobHistoryWidget = async () => {
  const userId = await AuthAdapter.getUserId()
  const jobHistory = await getApplications(userId);

  return (
    <section className={`${style.job_history_container} widget_box widget_headline`}>
        <h2>Recent Applications History</h2>
        
        <ul className={style.job_history_grid}>
         {jobHistory.map((application)=>{
          return <ApplicationHistoryCard key={application.applicationId} application={application}/>
         })}
        </ul>

    </section>
  )
}
