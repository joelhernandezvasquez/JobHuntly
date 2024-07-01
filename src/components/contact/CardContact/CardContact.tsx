import { Contact } from "@/interfaces/Contact";
import { TriggerActionMenu } from "@/components/ui/TriggerActionMenu/TriggerActionMenu";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import style from './style.module.css';

interface Props{
    contact:Contact
}

const CardContact = ({contact}:Props) => {
  return (
    <li className={style.container}>
        <div className={style.container_header}>
            <div className={style.image_avatar_container}>
              <FaUser size={30} color={'#6679F8'} />
            </div>

            <TriggerActionMenu
            actionEntity="contact"
            actionId={contact.contactId}
            actionRoutingUrl={'/contact/'}
            actionData={contact}
            dotsDirrection={'row'}
           />
        </div>

        <div className={style.container_body}>
           <p className={style.container_body_name}>{contact.firstName} {contact.lastName}</p>
           <span className={'fs_14 clr_neutral_90'}>{contact.role} at</span> 
           <span className="primary_clr">{contact.company}</span>

           <ul className={style.container_body_info_contact}>
             <li>
               <div className={style.container_contact_box}>
                <FaPhoneAlt size={20} color="#fff" />
              </div>
              <span>{contact.phone}</span>
            </li>   

            <li>
               <div className={style.container_contact_box}>
                <MdEmail size={20} color="#fff" />
              </div>
              <span>{contact.email}</span>
            </li>   
           </ul>
        </div>
    </li>
  )
}

export default CardContact