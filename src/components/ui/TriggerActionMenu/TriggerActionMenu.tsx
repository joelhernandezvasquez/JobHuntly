
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
import { UpdateActionView } from '../UpdateActionView/UpdateActionView';
interface Props{
    actionId:string,
    actionRoutingUrl:string
    actionEntity:views,
    className?:string,
    dotsDirrection?:'column' | 'row',
    actionData?:any
}

export const TriggerActionMenu = ({actionId,actionData,actionRoutingUrl,actionEntity,className,dotsDirrection}:Props) => {
    const [showDeleteModal,setShowDeleteModal] = useState(false);
    const [showUpdateModal,setShowUpdateModal] = useState(false);  
    const {isToggle,handleToggle} = useToogle();
    const modalRef = useOutSideClick(handleToggle);
    const router = useRouter();
    
    const onViewAction = () =>{
      router.push(`${actionRoutingUrl}${actionId}`)
    }

    const onUpdateAction  = () =>{
      setShowUpdateModal(!showUpdateModal);
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
          <ActionModalMenu.Action action={onUpdateAction}>Edit {actionEntity} </ActionModalMenu.Action>
          <ActionModalMenu.Action action ={onDeleteAction}>Delete {actionEntity} </ActionModalMenu.Action>
          </ActionModalMenu>
          
          </div> 
        }

          {showUpdateModal && (
           <Modal closeModal={onUpdateAction}>
             <h2 className={style.contact_form_heading}>Edit Contact</h2>
            <UpdateActionView data={actionData ?? {}} view={actionEntity} closeModal={onUpdateAction}/>
           </Modal>
          )}

        {showDeleteModal && (
          <Modal closeModal={onDeleteAction}>
            <DeleteActionView id={actionId} view={actionEntity} closeModal={onDeleteAction}/>
          </Modal>
        )}

       </div>
  )
}
