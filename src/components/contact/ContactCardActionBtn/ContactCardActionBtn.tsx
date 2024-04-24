'use client';

import { ActionModalMenu } from "@/components/ui/ActionModalMenu/ActionModalMenu"
import useToogle from "@/hooks/useToogle";
import { useOutSideClick } from "@/hooks/useOutSideClick";
import style from './style.module.css';
import { useRouter } from "next/navigation";

interface Prop{
  contactId:string
}

export const ContactCardActionBtn = ({contactId}:Prop) => {
  const {isToggle,handleToggle} = useToogle();
  const modalRef = useOutSideClick(handleToggle);
  const router = useRouter();

  const onViewContact = () =>{
   router.push(`/contact/${contactId}`)
   }

   const onEditApplication = () =>{
       alert('on edit application');
   }
   const onDeleteApplication = () =>{
       alert('on delete application');
   }

  return (
    <div className={style.contact_actions}>

    <button className={style.actions_btn} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    { isToggle &&
    <div ref={modalRef}>
    <ActionModalMenu>
     <ActionModalMenu.Action action={onViewContact}>View contact</ActionModalMenu.Action>
     <ActionModalMenu.Action action={onEditApplication}>Edit contact</ActionModalMenu.Action>
     <ActionModalMenu.Action action ={onDeleteApplication}>Delete contact</ActionModalMenu.Action>
    </ActionModalMenu>
    </div> 
    }
   </div>
  )
}
