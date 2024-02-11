import DashboardApplicationStats from "@/components/dashboard/DashboardAplicationStats/DashboardApplicationStats";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper/MaxWidthWrapper";
import CardSkeleton from "@/components/ui/Skeletons/CardSkeleton";
import { Suspense } from "react";

const dashboard = () => {

  return (
    <MaxWidthWrapper>
      <Suspense fallback={<CardSkeleton/>}>
        <DashboardApplicationStats/>
      </Suspense>
        
     </MaxWidthWrapper>
  )
}

export default dashboard