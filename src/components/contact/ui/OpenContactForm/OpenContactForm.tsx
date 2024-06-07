'use client';

import Modal from "@/components/ui/Modal/Modal";
import useToogle from "@/hooks/useToogle";
import style from './style.module.css';

export const OpenContactForm = () => {

  const {isToggle,handleToggle} = useToogle();

  return (
    <>
       <button className={style.add_contact_btn} onClick={handleToggle}>Add Contact</button>
       {
        isToggle && (
        <Modal closeModal={handleToggle}>
          Contact Modal
        </Modal>
       )}
    </>
  )
}
