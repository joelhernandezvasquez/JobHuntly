import { getInterviewsByDate } from "@/actions/interview/getInterviewByDate";
import InterviewCard from "@/components/InterviewCard/InterviewCard";
import style from './style.module.css';
import { DatePicker } from "@/components";

const DashboardInterviews = async () => {
 
  // TODO: Need to do the component colocation and pass the date to this component
  // TODO: make sure the date is being passed over the back-end
  // TODO: make sure the date picker gets close when finish selecting the date
  
 const today = new Date('2024/03/04');
 const interviews = await getInterviewsByDate(today);
 
 return (
    <section className={`widget_box ${style.interviews_widget_container}`}>
       <h2 className="widget_headline">Upcoming Interviews</h2>

       <DatePicker/>

      <ul className={style.interview_list}>
        {interviews.map((interview)=>{
            return <InterviewCard key={interview.interviewID} interview={interview}/>
        })}
      </ul>

    </section>
  
  )
}

export default DashboardInterviews