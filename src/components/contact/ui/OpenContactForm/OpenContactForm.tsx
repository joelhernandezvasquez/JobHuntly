'use client';

import Modal from "@/components/ui/Modal/Modal";
import useToogle from "@/hooks/useToogle";
import { AddContactForm } from "../ContactForms/AddContactForm";
import style from './style.module.css';

interface Props{
  userId:string
}

export const OpenContactForm = ({userId}:Props) => {

  const {isToggle,handleToggle} = useToogle();

  return (
    <>
       <button className={style.add_contact_btn} onClick={handleToggle}>Add Contact</button>
       {
        isToggle && (
        <Modal closeModal={handleToggle}>
          <h2 className={style.contact_form_heading}>Add Contact</h2>
          <p className={style.contact_sub_heading}>We would like to know more about your new contact! Please complete the details below.</p>
          <AddContactForm userId={userId}/>
        </Modal>
       )}
    </>
  )
}
