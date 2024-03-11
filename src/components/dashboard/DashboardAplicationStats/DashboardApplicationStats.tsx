import BenchMarkWidget from "@/components/ui/BenchMarkWidget/BenchMarkWidget";
import { getDashboardApplicationStats } from "@/actions/dashboard/getDashboardApplicationStats";
import { AuthAdapter } from "@/config/authAdapter";
import JobInterviewIcon from "../ui/JobInterviewIcon";
import JobAppliedIcon from "../ui/JobAppliedIcon";
import style from './style.module.css';

const DashboardApplicationStats = async () => {
    const userId = AuthAdapter.getUserId();
    const dashboardStats = await getDashboardApplicationStats(userId!);
  
    return (
    <>
    <BenchMarkWidget>
    <BenchMarkWidget.Header>
      <h2 className={style.bench_mark_heading}>Total Jobs Applied</h2>
    </BenchMarkWidget.Header>

    <BenchMarkWidget.Body>
      <div className={style.bench_mark_body_application_sent}>
        <span>{dashboardStats.jobApplied}</span>
        <JobAppliedIcon/>
      </div>
    </BenchMarkWidget.Body>

  </BenchMarkWidget>

  <BenchMarkWidget>
    <BenchMarkWidget.Header>
      <h2 className={style.bench_mark_heading}>Interviews Scheduled</h2>
    </BenchMarkWidget.Header>

    <BenchMarkWidget.Body>
      <div className={style.bench_mark_body_application_sent}>
        <span>{dashboardStats.interivews}</span>
        <JobInterviewIcon/>
      </div>
    </BenchMarkWidget.Body>

  </BenchMarkWidget>
  </>
  )}

export default DashboardApplicationStats