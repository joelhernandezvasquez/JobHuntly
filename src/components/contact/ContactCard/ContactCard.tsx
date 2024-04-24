import { Contact } from "@/interfaces/Contact";
import style from './style.module.css';
import Avatar from "@/components/Avatar/Avatar";
import { FaUser } from "react-icons/fa6";
import { ContactCardActionBtn } from "../ContactCardActionBtn/ContactCardActionBtn";

interface Props{
 contact:Contact
}

export const ContactCard = ({contact}:Props) => {
  console.log(contact);
  return (
    <li className={style.contact_card}>
     { 
       contact.avatar 
       ? <Avatar size="medium" imageSource={`/avatars/${contact.avatar}`}/>
       : <Avatar size='medium'><FaUser size={'23'} color={'#6679F8'} /></Avatar> 
     }
      <div className={style.contact_name_role}>
       <p className={style.contact_name}>{`${contact.firstName} ${contact.lastName}`}</p>
       <p className={style.contact_role}>{contact.role}</p>
      </div>

      <ContactCardActionBtn contactId={contact.contactId}/>
    </li>
  )
}
