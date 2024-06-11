
import { EmptyContacts } from "../ui/empty-contact/EmptyContacts";
import { getContacts } from "@/actions/contact/getContacts";
import { AuthAdapter } from "@/config/authAdapter";
import { ContactList } from "../ContactList/ContactList";
import { AddContactButton } from "../addContactButton/AddContactButton";
import style from './style.module.css';

export const ContactWidget = async () => {
  
  const userId = await AuthAdapter.getUserId();
  const contacts = await getContacts(userId);

  return (
    <section className={`${style.contact_container} widget_box widget_headline`}> 
     <div className={style.contact_container_header}>
       <h2>Contacts</h2>
       <AddContactButton/>
     </div>
     { 
       contacts.length > 0 
       ? <ContactList contacts={contacts}/>
       : <EmptyContacts/>
    }
    </section>
  )
}
