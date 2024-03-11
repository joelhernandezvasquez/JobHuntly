
import Link from "next/link";
import { fetchJobList } from "@/helper/actions/FetchJobListing";
import JobCard from "@/components/JobCard/JobCard";
import style from './style.module.css';

const JobListing = async () => {
    const jobsList = await fetchJobList();
   
  return (
    <div className={style.job_listing_wrapper}>
       <h2>Latest <span className='purple_text'>Jobs Open</span></h2>
       
       <ul className={style.job_list}>
       { jobsList.map((job)=>{
        return <JobCard key={job.id} jobItem={job}/>
       })}
       </ul>

       <div className={style.job_listing_footer}>
         <Link className={'redirect_button'} href={'/Jobs'}>Show All Jobs</Link>
       </div>
    </div>
  
   )
}

export default JobListing