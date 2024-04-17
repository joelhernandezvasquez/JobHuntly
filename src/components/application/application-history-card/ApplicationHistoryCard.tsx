import { Application } from "@/interfaces/Application";
import { FaWpforms } from "react-icons/fa6";
import { CalendarUtils } from "@/utils/date.utils";
import style from './style.module.css';

interface Props{
    application:Application
}

export const ApplicationHistoryCard = ({application}:Props) => {
    console.log(application)
    const {company,role,date_applied,status} = application;
    const dateAppliedFormatted = Object.values(CalendarUtils.getDayAndMonth(date_applied.toString())).join(' ').split('');

    return (
    <li className={style.application_history_card}>
       <div className={style.company_name}>
         <div className={style.company_logo}>
         <FaWpforms size={32} color={'white'} />
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

       <div className={style.application_actions}>
        <button className={style.actions_btn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
       </div>

       <div className={style.application_status_container}>
        <p className={`${style.application_status} ${style[status]}`}>{status}</p>
       </div>

    </li>
  )
}
