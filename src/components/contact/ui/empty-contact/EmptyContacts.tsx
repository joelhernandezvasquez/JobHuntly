
import Image from "next/image";
import emptyContactImg from '../../../../../public/icons/empty-contact.svg';
import style from './style.module.css';
import { OpenContactForm } from "../OpenContactForm/OpenContactForm";

export const EmptyContacts = () => {
  return (
    <div className={style.empty_contact_container}>
     <Image
      width={150}
      height={150}
      src={emptyContactImg}
      alt="emptyContact"
     />
     <p>You have no contacts yet.</p>
     <OpenContactForm/>
    </div>
  )
}
