import { ContactCard } from "../ContactCard/ContactCard";
import { Contact } from "@/interfaces/Contact";
import Link from "next/link";
import style from './style.module.css';

interface Props{
    contacts:Contact[]
}

export const ContactList = ({contacts}:Props) => {
  return (
    <>
     <ul className={style.contact_list}>
            {contacts.map((contact)=>{
              return <ContactCard key={contact.contactId} contact={contact}/>
            })}
    </ul>
             
    <Link href={'/contact'} className={style.contact_link_btn}> See all contacts </Link>
    </>
  )
}
