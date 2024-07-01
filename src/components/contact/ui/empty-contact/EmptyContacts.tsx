
import Image from "next/image";
import emptyContactImg from '../../../../../public/icons/empty-contact.svg';
import { AuthAdapter } from "@/config/authAdapter";
import { OpenContactForm } from "../OpenContactForm/OpenContactForm";
import style from './style.module.css';



export const EmptyContacts = async () => {
  const userId = await AuthAdapter.getUserId();
  
  return (
    <div className={style.empty_contact_container}>
     <Image
      width={150}
      height={150}
      src={emptyContactImg}
      alt="emptyContact"
     />
     <p>You have no contacts yet.</p>
     <OpenContactForm userId ={userId}/>
    </div>
  )
}
