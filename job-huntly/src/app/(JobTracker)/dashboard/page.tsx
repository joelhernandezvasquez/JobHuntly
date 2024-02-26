import { Suspense } from "react";
import { TimeUnit } from "@/types";
import DashboardApplicationStats from "@/components/dashboard/DashboardAplicationStats/DashboardApplicationStats";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper/MaxWidthWrapper";
import CardSkeleton from "@/components/ui/Skeletons/CardSkeleton";
import DashboardJobStatstictics from "@/components/dashboard/DashboardJobStatstictics/DashboardJobStatstictics";
import CardPlaceholderSkeleton from "@/components/ui/Skeletons/CardPlaceholderSkeleton/CardPlaceholderSkeleton";

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
     
     </MaxWidthWrapper>
  )
}

