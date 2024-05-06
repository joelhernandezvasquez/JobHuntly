
import { CalendarUtils } from "@/utils/date.utils";
import { Application } from "@/interfaces/Application";
import { FaWpforms } from "react-icons/fa6";
import style from './style.module.css';
import { transformObjectToArray } from "@/utils/utils";
import { TriggerActionMenu } from "@/components/ui/TriggerActionMenu/TriggerActionMenu";
interface Props{
    application:Application
}

export const ApplicationHistoryCard = ({application}:Props) => {
    const {applicationId,company,role,date_applied,status} = application;
    
    const dateApplied = CalendarUtils.getDayAndMonth(date_applied.toString());
    const dateAppliedFormatted = transformObjectToArray(dateApplied) ;

    return (
    <li className={style.application_history_card}>
       <div className={style.company_name}>
         <div className={style.company_logo}>
         <FaWpforms size={32} color={'#FFFFFF'} />
         </div>
         <p>{company}</p>
       </div>
       
       <div className={style.job_position}>
        <p>{role}</p>
       </div>

       <div className={style.date_applied}>
        <span className={style.date_applied_label}>Date Applied</span>
        <p>{dateAppliedFormatted}</p>
       </div>
       
      
       <TriggerActionMenu
        actionEntity="application"
        actionId={applicationId}
        actionRoutingUrl={'application/'}
        className={style.application_actions}
        dotsDirrection={'row'}
       />
       <div className={style.application_status_container}>
        <p className={`${style.application_status} ${style[status]}`}>{status}</p>
       </div>

    </li>
  )
}