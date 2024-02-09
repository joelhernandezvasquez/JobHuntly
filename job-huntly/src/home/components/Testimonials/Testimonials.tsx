
import TestimonialsTab from '@/components/ui/TestimonialsTab/TestimonialsTab';
import { testimoniesArray } from '@/helper/data/testimonies';
import style from './style.module.css';

const Testimonials = () => {
  return (
    <section className={style.testimonials_wrapper}>
        <h2 className={style.testimonials_header}>
           Clients Speak 
           <span className='purple_text'> Our Success Journey</span>
          </h2>
        <p className={style.testimonials_subheading}>Become part of a thriving community of professionals, elevate your resume, streamline your job search, and secure a job that brings you fulfillment.</p>
        <TestimonialsTab testimonies = {testimoniesArray}/>
    </section>
  )
}

export default Testimonials