
import Link from 'next/link';
import { JobList } from '../../interfaces/JobList';
import style from './style.module.css';

interface Props{
   jobItem:JobList
}

const JobCard = ({jobItem}:Props) => {
 const {id,companyLogo,title,companyName,location,jobType,postDate} = jobItem;  
  
  return (
    <li className={style.job_card}>

      <div className={style.job_card_logo_container}>
       <img width={100} height={100} src={companyLogo} alt={`logo of ${companyName}`}/>
      </div>
      
      <div className={style.job_card_info}>
      <p className={style.job_title}>{title}</p>
      <p className={style.company_name_location}>{companyName} | {location}</p>
      <p className={style.job_type_date}> <span className={style.job_type}>{jobType} </span> <span>{postDate}</span> </p>
      </div>

      <div className={style.job_card_footer}>
         <Link className={'redirect_button'} href={`/Jobs/${id}`}>Apply Now</Link>
      </div>
     
    </li>
  )
}

export default JobCard