import { Suspense } from "react";
import { DashboardApplicationStats,DashboardJobStatstictics,DashboardInterviews, JobHistoryWidget  } from "@/components/dashboard";
import { MaxWidthWrapper,CardPlaceholderSkeleton,CardSkeleton, TaskWidget } from "@/components";
import { ContactWidget } from "@/components/contact";
import { ResumeWidget } from "@/components/resume/ResumeWidget/ResumeWidget";
import style from './style.module.css';

export default function dashboard ()
{

  return ( 
    <MaxWidthWrapper>
      <div className={style.main_dashboard}>
      <Suspense fallback={<CardSkeleton/>}>
        <DashboardApplicationStats/>
      </Suspense>
      
      <Suspense fallback={<CardPlaceholderSkeleton/>}>
        <DashboardJobStatstictics/>
      </Suspense>
   
        <Suspense fallback={<CardPlaceholderSkeleton/>}>
          <DashboardInterviews/>
        </Suspense> 
        
       <Suspense fallback={<CardPlaceholderSkeleton/>}>
          <TaskWidget/>
       </Suspense>

       <Suspense fallback={<CardPlaceholderSkeleton/>}>
        <JobHistoryWidget/>
       </Suspense>
      
       <Suspense fallback={<CardPlaceholderSkeleton/>}>
        <ContactWidget/>
       </Suspense>

       <Suspense fallback={<CardPlaceholderSkeleton/>}>
        <ResumeWidget/>
       </Suspense>
      </div>
      

     </MaxWidthWrapper>
  )
}

