
'use client';
import {useRouter } from 'next/navigation';
import useToogle from '@/hooks/useToogle';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import { ActionButton, ActionModalMenu } from '@/components';
import style from './style.module.css';

interface Props{
    actionId:string,
    actionRoutingUrl:string
    actionEntity:string,
    className?:string,
    dotsDirrection?:'column' | 'row'
}

export const TriggerActionMenu = ({actionId,actionRoutingUrl,actionEntity,className,dotsDirrection}:Props) => {
    const {isToggle,handleToggle} = useToogle();
    const modalRef = useOutSideClick(handleToggle);
    const router = useRouter();

    const onViewAction = () =>{
      router.push(`${actionRoutingUrl}${actionId}`)
    }
 
    return (
        <div className={`${style.actions_container} ${className && className} ${dotsDirrection === 'row' && style.flex_row}`}>
        <ActionButton className={style.actions_btn} callback={handleToggle}/>
       
        { isToggle &&
          <div ref={modalRef}>
    
          <ActionModalMenu>
          <ActionModalMenu.Action action={onViewAction}>View {actionEntity} </ActionModalMenu.Action>
          <ActionModalMenu.Action action={()=>{}}>Edit {actionEntity} </ActionModalMenu.Action>
          <ActionModalMenu.Action action ={()=>{}}>Delete {actionEntity} </ActionModalMenu.Action>
          </ActionModalMenu>
          
          </div> 
        }
       </div>
  )
}
