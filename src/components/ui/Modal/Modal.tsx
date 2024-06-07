'use client';
import { ReactNode, useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import style from './style.module.css';

interface Props{
  children:ReactNode,
  closeModal:() => void
}

const Modal = ({children,closeModal}:Props) => { 
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleClickOutside = (event: { target: any; })=>{
      if (modalRef.current && !modalRef.current.contains(event.target)) {
       closeModal();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  },[closeModal])

  return (
    <div className={style.modal_background_container}>
      <div className={style.modal} role='dialog' tabIndex={-1} ref={modalRef}>
        <div className={style.modal_header}>
            <button className={style.modal_close_btn} onClick={closeModal}>
               <IoIosClose size={35}/>
            </button>
        </div>
        <div className={style.modal_body}>
         {children}
        </div>
      </div>
   </div>
  )
}

export default Modal;