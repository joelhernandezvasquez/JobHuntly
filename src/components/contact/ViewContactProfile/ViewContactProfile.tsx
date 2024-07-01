import { Contact } from "@/interfaces/Contact";
import Avatar from "@/components/Avatar/Avatar";
import { FaUser } from "react-icons/fa6";
import style from './style.module.css';

interface Props{
    contact:Contact
}
export const ViewContactProfile = ({contact}:Props) => {
 
  return (
    <div className={style.container}> 
      <div className={`${style.header_contact} widget_box`}>
        <Avatar size='medium'><FaUser size={'25'} color={'#7C6CD8'}/></Avatar>
         <div>
           <h2>{contact.firstName} {contact.lastName}</h2>
           <p className={style.contact_label}>{contact.role}</p>
         </div>
      </div>

      <div className={`${style.info_contact} widget_box`}>
        <h2>Personal Information</h2>
        
        <div className={style.info_contact_grid}>
        
           <div className={style.info_contact_box}>
             <span className={style.contact_label}>First Name</span>
             <p>{contact.firstName}</p>
           </div>

           <div className={style.info_contact_box}>
             <span className={style.contact_label}>Last Name</span>
             <p>{contact.lastName}</p>
           </div>

           <div className={style.info_contact_box}>
             <span className={style.contact_label}>Email address</span>
             <p>{contact.email}</p>
           </div>

           <div className={style.info_contact_box}>
             <span className={style.contact_label}>Phone</span>
             <p>{contact.phone}</p>
           </div>

           <div className={style.info_contact_box}>
             <span className={style.contact_label}>Company</span>
             <p>{contact.company}</p>
           </div>

           <div className={style.info_contact_box}>
             <span className={style.contact_label}>Notes</span>
             <textarea className={`${style.textarea}`} name="notes" disabled>
              {contact.notes}
             </textarea>
           
           </div>

        </div>

      </div>
    
    </div>
  )

}