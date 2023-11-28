'use client';

import { FormEvent, useState} from 'react';
import { useRouter } from 'next/navigation';
import useForm from '@/hooks/useForm';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';
import { dropdownOptions } from '@/helper/data/jobLocationsData';
import style from './style.module.css';

const JobSearch = () => {

  const [experienceLevel,setExperienceLevel] = useState(dropdownOptions[0].option);
  const [jobSearch,setJobSearch] = useState('');
  const {isFormSubmitted,updateFormStatus} = useForm();
  const router = useRouter();

  const handleExperienceLevelSelection = (option: string) => {
    setExperienceLevel(option);
  }

  const onSubmitJobSearch = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateFormStatus(true);

    if(jobSearch === '' ){
      return;
    }
    router.push(`/Jobs/${jobSearch}?experienceLevel=${experienceLevel}`);
  }

  return (
    <form className={style.jobSearch_wrapper} onSubmit={(event) => onSubmitJobSearch(event)}>

      <div className={style.jobSearch_form_field}>
        <Input
         id = 'search-job'
         name = 'searchJob'
         defaultValue = {jobSearch}
         onValuedChange={setJobSearch}
         errorMessage='Job keyword is required'
         isInvalid = {isFormSubmitted && jobSearch ===''}
         placeholder='Job title or keyword'
         iconSearch={true}
        />
      </div>
      
      <div className={style.job_search_dropdown}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5 11.0005C14.5 9.61924 13.3808 8.5 12.0005 8.5C10.6192 8.5 9.5 9.61924 9.5 11.0005C9.5 12.3808 10.6192 13.5 12.0005 13.5C13.3808 13.5 14.5 12.3808 14.5 11.0005Z" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21.5C10.801 21.5 4.5 16.3984 4.5 11.0633C4.5 6.88664 7.8571 3.5 11.9995 3.5C16.1419 3.5 19.5 6.88664 19.5 11.0633C19.5 16.3984 13.198 21.5 11.9995 21.5Z" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        
        <Dropdown options = {dropdownOptions}  onSelectOptionCallback={handleExperienceLevelSelection}/>  
      </div>

      <Button type='primary' size='large'>
        Search my job 
      </Button>
    </form>
  )
}

export default JobSearch
