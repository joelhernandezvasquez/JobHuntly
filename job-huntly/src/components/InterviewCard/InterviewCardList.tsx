import { Interviewers } from '@/interfaces/Interviews';
import Avatar from '../Avatar/Avatar';
import Avatar1 from '../../../public/avatars/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg';
import style from './style.module.css';

interface Props{
    interviewers:Interviewers []
}
const InterviewCardList = ({interviewers}:Props) => {
  
    return (
    <ul className={style.interview_card_body_interviewers}>
    {interviewers.map((interviewer:Interviewers)=>{
     return <li className={style.interviewers_item} key={interviewer.name}>
              {/* TODO: to work on the avatar */}
              <Avatar imageSource={Avatar1} size="small"/>
              
              <div className={style.interviewers_item_info}>
               <p className={style.interviewers_item_info_name}>{interviewer.name}</p>
               <span className={style.interviewers_item_job_title}>{interviewer.jobTitle}</span>
              </div>
           </li>
    })}
    </ul>
  )
}

export default InterviewCardList