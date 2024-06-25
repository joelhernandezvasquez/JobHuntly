
'use client';
import { useState } from 'react';
import {useRouter } from 'next/navigation';
import useToogle from '@/hooks/useToogle';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import { ActionButton, ActionModalMenu } from '@/components';
import Modal from '../Modal/Modal';
import style from './style.module.css';
import { DeleteActionView } from '../DeleteActionView/DeleteActionView';
import { views } from '@/types';
interface Props{
    actionId:string,
    actionRoutingUrl:string
    actionEntity:views,
    className?:string,
    dotsDirrection?:'column' | 'row'
}

export const TriggerActionMenu = ({actionId,actionRoutingUrl,actionEntity,className,dotsDirrection}:Props) => {
    const {isToggle,handleToggle} = useToogle();
    const modalRef = useOutSideClick(handleToggle);
    const router = useRouter();
    const [showDeleteModal,setShowDeleteModal] = useState(false);
   
    const onViewAction = () =>{
      router.push(`${actionRoutingUrl}${actionId}`)
    }
    const onDeleteAction = () =>{
     setShowDeleteModal(!showDeleteModal);
    }
 
    return (
        <div className={`${style.actions_container} ${className && className} ${dotsDirrection === 'row' && style.flex_row}`}>
        <ActionButton className={style.actions_btn} callback={handleToggle}/>
       
        { isToggle &&
          <div ref={modalRef}>
    
          <ActionModalMenu>
          <ActionModalMenu.Action action={onViewAction}>View {actionEntity} </ActionModalMenu.Action>
          <ActionModalMenu.Action action={()=>{}}>Edit {actionEntity} </ActionModalMenu.Action>
          <ActionModalMenu.Action action ={onDeleteAction}>Delete {actionEntity} </ActionModalMenu.Action>
          </ActionModalMenu>
          
          </div> 
        }
        {showDeleteModal && (
          <Modal closeModal={onDeleteAction}>
            <DeleteActionView id={actionId} view={actionEntity} closeModal={onDeleteAction}/>
          </Modal>
        )}
       </div>
  )
}
