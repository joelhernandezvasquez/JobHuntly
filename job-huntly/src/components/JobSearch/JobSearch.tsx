'use client';

import { useState } from 'react';
import Button from '../Button/Button';
import style from './style.module.css';

// TODO: remove type and array later only temporary
type LocationOptions = {
  id:string,
  option:string
}
const dropdownOptions:LocationOptions [] = [
  {
    id:crypto.randomUUID(),
    option:'Florence, Italy'
  },
  {
    id:crypto.randomUUID(),
    option:'Barcelona, Spain'
  },
  {
    id:crypto.randomUUID(),
    option:'New York, NY'
  },
  {
    id:crypto.randomUUID(),
    option:'Bronx, NY'
  }
]

const JobSearch = () => {

  const [jobLocation,setJobLocation] = useState(dropdownOptions[0].option);
  
  // TODO:this state has to be moved to custom hook
  const [isOpen,setIsOpen] = useState(false);

  const handleJobLocationSelection = (option:string) =>{
    setJobLocation(option);
    toggleOpen();
  }
  
  const toggleOpen = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className={style.jobSearch_wrapper}>
       
       {/* TODO: Probably  Needs to break this part into a component */}
       <div className={style.jobSearch_search_box}>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <circle cx="11.7666" cy="12.2664" r="8.98856" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0183 18.9849L21.5423 22.4997" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <input 
              type='text' 
              name="search-job" 
              id='search-job'
              className={style.input_search_box}
              placeholder='Job title or keyword'
            />

       </div>
      
      {/* TODO: Make this a Dropdown Component */}
      {/* TODO: Job Option needs to be fetch from Database or third Party library */}
       <div className={style.job_search_dropdown}>
            
            <svg className={style.icon_location} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11.0005C14.5 9.61924 13.3808 8.5 12.0005 8.5C10.6192 8.5 9.5 9.61924 9.5 11.0005C9.5 12.3808 10.6192 13.5 12.0005 13.5C13.3808 13.5 14.5 12.3808 14.5 11.0005Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21.5C10.801 21.5 4.5 16.3984 4.5 11.0633C4.5 6.88664 7.8571 3.5 11.9995 3.5C16.1419 3.5 19.5 6.88664 19.5 11.0633C19.5 16.3984 13.198 21.5 11.9995 21.5Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          
           <div className={style.job_search_dropdown_wrapper_header}>
                <div className={style.job_search_dropdown_header} onClick={toggleOpen}>
                <span>{jobLocation}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
               
           
            <ul className={`${style.job_search_dropdown_options} ${ isOpen && style.show_dropdown }`}>
            {dropdownOptions.map(({id,option})=>{
              return ( option !== jobLocation &&  <li key={id} onClick={() => handleJobLocationSelection(option)}>{option}</li> ) 
            })}
            </ul>

           </div>

       </div>
   
    <Button type='primary' size='large'>
        Search my job
    </Button>

   </div>
  )
}

export default JobSearch