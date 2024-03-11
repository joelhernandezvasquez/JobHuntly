import  Image  from 'next/image';
import ctaMobile from '../../../../public/2.1 Dashboard Applicant.jpg';
import SignUpBtn from './ui/SignUpBtn';
import style from './style.module.css';

const CTA = () => {

  return (
    <section className={style.cta_bg}>
      <div className={style.cta_container}>
      <h2>Start Leveling your Career Today</h2>
      
      <SignUpBtn/>
    
     <Image
     className={style.cta_illustration}
      width={300}
      height={300}
      src={ctaMobile}
      alt=""
     />
      </div>
    
    </section>
  )
}

export default CTA