'use client';
import useToogle from '@/hooks/useToogle';
import { ActionModalMenu } from '@/components';
import {useRouter } from 'next/navigation';
import style from './style.module.css';

interface Props{
  applicationId:string
}

export const ApplicationHistoryCardBtn = ({applicationId}:Props) => {

    const {isToggle,handleToggle} = useToogle();
    const router = useRouter();

    const onViewApplication = () =>{
     router.push(`application/${applicationId}`);
    }

    const onEditApplication = () =>{
        alert('on edit application');
    }
    const onDeleteApplication = () =>{
        alert('on delete application');
    }
  return (
    <div className={style.application_actions}>

    <button className={style.actions_btn} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </button>

    {isToggle && 
    <ActionModalMenu>
     <ActionModalMenu.Action action={onViewApplication}>View application</ActionModalMenu.Action>
     <ActionModalMenu.Action action={onEditApplication}>Edit application</ActionModalMenu.Action>
     <ActionModalMenu.Action action = {onDeleteApplication}>Delete application</ActionModalMenu.Action>
    </ActionModalMenu>
    }
   </div>
  )
}
