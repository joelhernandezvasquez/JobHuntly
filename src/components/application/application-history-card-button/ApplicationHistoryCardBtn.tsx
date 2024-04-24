'use client';
import {useRouter } from 'next/navigation';
import useToogle from '@/hooks/useToogle';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import { ActionButton, ActionModalMenu } from '@/components';
import style from './style.module.css';
interface Props{
  applicationId:string
}

export const ApplicationHistoryCardBtn = ({applicationId}:Props) => {
    const router = useRouter();
    const {isToggle,handleToggle} = useToogle();
    const ref = useOutSideClick(handleToggle);

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

    <ActionButton className={style.actions_btn} callback={handleToggle}/>

    {isToggle &&
    <div ref={ref}>
    <ActionModalMenu>
     <ActionModalMenu.Action action={onViewApplication}>View application</ActionModalMenu.Action>
     <ActionModalMenu.Action action={onEditApplication}>Edit application</ActionModalMenu.Action>
     <ActionModalMenu.Action action = {onDeleteApplication}>Delete application</ActionModalMenu.Action>
    </ActionModalMenu>
    </div> 
    }
   </div>
  )
}
