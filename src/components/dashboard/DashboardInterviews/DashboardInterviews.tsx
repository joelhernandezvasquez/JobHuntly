'use client';

import { useState } from "react";
import { DatePicker } from "@/components";
import { DashboardInterviewsWrapper, GetDashboardInterviews } from "@/components/dashboard";
import style from './style.module.css';

 // TODO: Start unit testing
 export const DashboardInterviews = () => {
  const [date,setDate] = useState<Date>(new Date);

  const onHandleDateSelected = (selectedDate:Date) =>{
    setDate(selectedDate);
  }

 return (
    <section className={`widget_box ${style.interviews_widget_container}`}>
       <h2 className="widget_headline">Upcoming Interviews</h2>

       <DatePicker emitSelectedDate={onHandleDateSelected}/>

          <DashboardInterviewsWrapper>
            <GetDashboardInterviews dateSelected={date}/>
          </DashboardInterviewsWrapper>     
    </section>
  )
}

export default DashboardInterviews