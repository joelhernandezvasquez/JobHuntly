import { Resume } from '@/interfaces/Resume';
import style from './style.module.css';
import { BiSolidFilePdf } from "react-icons/bi";
import { BsFiletypeDocx } from "react-icons/bs";
import { CalendarUtils } from '@/utils/date.utils';
import { ResumeActionBtn } from '../ResumeActionButton/ResumeActionBtn';


interface Props{
    resume:Resume
}

export const ResumeFileCard = ({resume}:Props) => {
    console.log(resume);
    const {file_type,file_name,upload_date,resume_id} = resume;
    const {month,day,year} = CalendarUtils.getDayAndMonth(upload_date.toString());
    const fileSize = (resume.file_size / 1024).toFixed(2);
    
    return (
    <li className={style.resume_file_card}>
     <div>
        {file_type === 'PDF'
            ?  <BiSolidFilePdf size={25} color={'F23E3E'}/>
            :  <BsFiletypeDocx size={25} color={'54A0FF'} /> 
        }
     </div>
     <div className={style.resume_file_name_size_col}>
        <p>{file_name}</p>
        <p className={style.flex}>
           <span>{fileSize}MB</span> 
           <span className={style.circle_divider}></span>
           <span>{month} {day}, {year}</span>
        </p>
     </div>

     <ResumeActionBtn ResumeId={resume_id}/>
     
    </li>
  )
}
