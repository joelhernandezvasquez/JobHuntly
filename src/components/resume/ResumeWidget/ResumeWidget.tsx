
import { ResumeFileCard } from '../ResumeFileCard/ResumeFileCard';
import { getResumes } from '@/actions/resume/getResumes';
import { AuthAdapter } from '@/config/authAdapter';
import style from './style.module.css';

export const ResumeWidget = async() => {
  const userId = await AuthAdapter.getUserId()
  const resumeList = await getResumes(userId);
  
  return (
    <section className={`${style.resume_container} widget_box widget_headline`}>
       <h2>Recent Files Upload</h2>

       <ul className={style.resume_card_list}>
         {resumeList.map((resume) => {
          return <ResumeFileCard key={resume.resume_id} resume={resume}/>
         })}
       </ul>
    </section>
  )
}
