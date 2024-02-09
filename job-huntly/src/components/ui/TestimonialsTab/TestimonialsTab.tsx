'use client';

import { useState } from 'react';
import useTabs from '@/hooks/useTabs';
import TestimonialCard from '../../TestimonialCard/TestimonialCard';
import { Testimonies} from '../../../interfaces/testimonials';
import { ActiveButton } from '@/helper/types/types';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import style from './style.module.css';

interface Props{
    testimonies:Testimonies[]
}

const TestimonialsTab = ({testimonies}:Props) => {

  const {selectedTab,handleSeletedTab} = useTabs();
  const [activeBtn,setActiveBtn] = useState<ActiveButton>(1);

  const incrementTabIndex = () =>{
    if(selectedTab < testimonies.length - 1){
      handleSeletedTab(selectedTab + 1);
    }

    if(activeBtn!==1){
      setActiveBtn(1);
    }    
  }
  const decrementTabIndex = () =>{
   if(selectedTab === 0) return;
     handleSeletedTab(selectedTab - 1);
    
    if(activeBtn!==2){
      setActiveBtn(2);
    }
  }
  return (
    <section className={style.testimonials_tab_container}> 
      <div className={style.testimonials_tab_button_container}>
      <button aria-label="Previous" 
         className={`${style.testimonials_tab_button} ${activeBtn === 2 && style.active_btn}`} onClick={decrementTabIndex}>
         <IoChevronBackOutline size={15}/>
      </button>

        <button 
          aria-label="Next"
         className={`${style.testimonials_tab_button} ${ activeBtn === 1 && style.active_btn}`} 
         onClick={incrementTabIndex}
         >
         <IoChevronForwardOutline size={15}/>
        </button>
      </div>

      <article>
         <TestimonialCard testimony={testimonies[selectedTab]} />  
      </article>
    
    </section>
  )
}

export default TestimonialsTab;