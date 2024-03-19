import { getInterviewsByDate } from "@/actions/interview/getInterviewByDate";
import InterviewCard from "@/components/InterviewCard/InterviewCard";
import style from './style.module.css';

interface Props{
 dateSelected:Date
}

export const GetDashboardInterviews = async({dateSelected}:Props) => {
    const interviews = await getInterviewsByDate(dateSelected);
    
    return (
   <>
    <ul className={style.interview_list}>
        {interviews.map((interview)=>{
            return <InterviewCard key={interview.interviewID} interview={interview}/>
        })}
      </ul>
   </>
  )
}
