
import { EmptyContacts } from "../ui/empty-contact/EmptyContacts";
import { getContacts } from "@/actions/contact/getContacts";
import { AuthAdapter } from "@/config/authAdapter";
import { IoAddOutline } from "react-icons/io5";
import style from './style.module.css';
import { ContactList } from "../ContactList/ContactList";

export const ContactWidget = async () => {
  
  const userId = await AuthAdapter.getUserId();
  const contacts = await getContacts(userId);

  return (
    <section className={`${style.contact_container} widget_box widget_headline`}> 
     <div className={style.contact_container_header}>
       <h2>Contacts</h2>
       <div className={style.add_contact_container_btn}>
        <IoAddOutline size={22} color={'#fff'}></IoAddOutline>
       </div>
     </div>
     { 
       contacts.length > 0 
       ? <ContactList contacts={contacts}/>
       : <EmptyContacts/>
    }
    </section>
  )
}
