import { Interviewers } from '@/interfaces/Interviews';
import { FaUser } from "react-icons/fa";
import Avatar from '../Avatar/Avatar';
import style from './style.module.css';

interface Props{
    interviewers:Interviewers []
}
const InterviewCardList = ({interviewers}:Props) => {
    
   return (
    <ul className={style.interview_card_body_interviewers}>
    {interviewers.map(({name,jobTitle}:Interviewers)=>{
     return <li className={style.interviewers_item} key={name}>
              <Avatar  size='small'>
              <FaUser size={'18'} color={'#6679F8'} />
              </Avatar>
              <div className={style.interviewers_item_info}>
               <p className={style.interviewers_item_info_name}>{name}</p>
               <span className={style.interviewers_item_job_title}>{jobTitle}</span>
              </div>
           </li>
    })}
    </ul>
  )
}

export default InterviewCardList