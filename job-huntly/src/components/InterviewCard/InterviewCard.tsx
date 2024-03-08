'use client';

import { Interviews } from "@/interfaces/Interviews";
import InterviewCardList from "./InterviewCardList";
import { IoBusinessOutline } from "react-icons/io5";
import style from './style.module.css';
import { CalendarUtils } from "@/utils/date.utils";

interface Props{
    interview:Interviews;
}
const InterviewCard = ({interview}:Props) => {
   const {InterviewDuration,description,date} = interview;
   const {day,month} = CalendarUtils.getDayAndMonth(date);
   console.log(interview);

    return (
    <li className={style.interview_card}>
      <div className={style.interview_card_header}>
  
         <div className={style.interview_card_header_date}>
           <span className={style.header_day}>{day}</span>
           <span className={style.header_month}>{month}</span>
         </div>

         <div className={style.interview_card_header_time}>
            <p className={style.interview_type}>{description}</p>
            <span className={style.interview_interval_time}>{InterviewDuration}</span>
         </div>
      
      </div>

      <div className={style.interview_card_body}>
        <h3>Interviewers</h3>
         <InterviewCardList interviewers={interview.interviewers}/>
      </div>
      
      <div className={style.interview_card_footer}>
      <h3>Company</h3>
       <div className={style.interview_card_footer_info_container}>

         <div className={style.interview_card_footer_company_avatar}>
           <IoBusinessOutline size={'18'} color={'#6679F8'} />
         </div>

         <p>{interview.company}</p>
       </div>

      </div>
   </li>
  )
}

export default InterviewCard