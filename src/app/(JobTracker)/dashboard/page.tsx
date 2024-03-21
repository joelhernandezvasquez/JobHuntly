import { Suspense } from "react";
import { TimeUnit } from "@/types";
import { DashboardApplicationStats,DashboardJobStatstictics,DashboardInterviews  } from "@/components/dashboard";
import { MaxWidthWrapper,CardPlaceholderSkeleton,CardSkeleton, TaskWidget } from "@/components";

export default function dashboard (
{searchParams}:{searchParams: { [key: string]:string | string[] | undefined }})
{
   const frequencyFilterSelection = (searchParams?.frequency ?? 'Week') as TimeUnit;

  return (
    <MaxWidthWrapper>
      <Suspense fallback={<CardSkeleton/>}>
        <DashboardApplicationStats/>
      </Suspense>
      
      <Suspense fallback={<CardPlaceholderSkeleton/>}>
        <DashboardJobStatstictics filteredfrequency={frequencyFilterSelection}/>
      </Suspense>
   
        <Suspense fallback={<CardPlaceholderSkeleton/>}>
          <DashboardInterviews/>
        </Suspense>
       
       <TaskWidget/>

     </MaxWidthWrapper>
  )
}

