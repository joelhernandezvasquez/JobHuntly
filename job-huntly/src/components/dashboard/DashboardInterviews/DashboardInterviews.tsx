import { getInterviewsByDate } from "@/actions/interview/getInterviewByDate";
import InterviewCard from "@/components/InterviewCard/InterviewCard";
import style from './style.module.css';

const DashboardInterviews = async () => {
 const today = new Date('2024/03/04');
 const interviews = await getInterviewsByDate(today);
 
 return (
    <section className={`widget_box ${style.interviews_widget_container}`}>
       <h2 className="widget_headline">Upcoming Interviews</h2>

      <ul className={style.interview_list}>
        {interviews.map((interview)=>{
            return <InterviewCard key={interview.interviewID} interview={interview}/>
        })}
      </ul>


    </section>
  
  )
}

export default DashboardInterviews