'use client';

import useToogle from "@/hooks/useToogle";
import Modal from "@/components/ui/Modal/Modal";
import { AddContactForm } from "../ui/ContactForms/AddContactForm";
import { IoAddOutline } from "react-icons/io5"
import style from './style.module.css';

export const AddContactButton = () => {
    const {isToggle,handleToggle} = useToogle();

  return (
    <div className={style.add_contact_container_btn}>
      <IoAddOutline size={22} color={'#fff'} onClick={handleToggle}></IoAddOutline>
      {
        isToggle && (
        <Modal closeModal={handleToggle}>
          <h2 className={style.contact_form_heading}>Add Contact</h2>
          <p className={style.contact_sub_heading}>We would like to know more about your new contact! Please complete the details below.</p>
          <AddContactForm/>
        </Modal>
       )}
   </div>
  )
}
