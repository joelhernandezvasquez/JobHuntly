
import Link from "next/link";
import { getContacts } from "@/actions/contact/getContacts";
import { AuthAdapter } from "@/config/authAdapter";
import { IoAddOutline } from "react-icons/io5";
import { ContactCard } from "../ContactCard/ContactCard";
import style from './style.module.css';

export const ContactWidget = async () => {
  
  const contacts = await getContacts(AuthAdapter.getUserId()!);

  return (
    <section className={`${style.contact_container} widget_box widget_headline`}> 
     <div className={style.contact_container_header}>
       <h2>Contacts</h2>
       <div className={style.add_contact_container_btn}>
        <IoAddOutline size={22} color={'#fff'}></IoAddOutline>
       </div>
     </div>
     
     <ul className={style.contact_list}>
      {contacts.map((contact)=>{
        return <ContactCard key={contact.contactId} contact={contact}/>
      })}
     </ul>
    
    <Link href={'/contact'} className={style.contact_link_btn}> See all contacts </Link>

    </section>
  )
}
