'use client';
import {useRouter } from 'next/navigation';
import useToogle from '@/hooks/useToogle';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import { ActionButton, ActionModalMenu } from '@/components';
import style from './style.module.css';

interface Props{
  interviewId:string
}

export const InterviewCardButton = ({interviewId}:Props) => {
    const router = useRouter();
    const {isToggle,handleToggle} = useToogle();
    const ref = useOutSideClick(handleToggle);

    const onViewApplication = () =>{
     router.push(`interviews/${interviewId}`);
    }

    const onEditApplication = () =>{
        alert('on edit interview');
    }
    const onDeleteApplication = () =>{
        alert('on delete interview');
    }
  return (
    <div className={style.actions_container}>

    <ActionButton className={style.actions_btn} callback={handleToggle}/>

    {isToggle &&
    <div ref={ref}>
    <ActionModalMenu>
     <ActionModalMenu.Action action={onViewApplication}>View Interview</ActionModalMenu.Action>
     <ActionModalMenu.Action action={onEditApplication}>Edit Interview</ActionModalMenu.Action>
     <ActionModalMenu.Action action = {onDeleteApplication}>Delete Interview </ActionModalMenu.Action>
    </ActionModalMenu>
    </div> 
    }
   </div>
  )
}
