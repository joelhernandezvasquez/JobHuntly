import { Suspense } from "react";
import DashboardApplicationStats from "@/components/dashboard/DashboardAplicationStats/DashboardApplicationStats";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper/MaxWidthWrapper";
import CardSkeleton from "@/components/ui/Skeletons/CardSkeleton";
import DashboardJobStatstictics from "@/components/dashboard/DashboardJobStatstictics/DashboardJobStatstictics";

const dashboard = () => {

  return (
    <MaxWidthWrapper>
      <Suspense fallback={<CardSkeleton/>}>
        <DashboardApplicationStats/>
      </Suspense>
      
      <DashboardJobStatstictics/>

      
     </MaxWidthWrapper>
  )
}

export default dashboard