
import { Contact } from '@/interfaces/Contact';
import CardContact from '../CardContact/CardContact';
import { EmptyContacts } from '../ui/empty-contact/EmptyContacts';
import style from './style.module.css';


interface Props{
    contacts:Contact[]
}

export const CardContentList = ({contacts}:Props) => {
  
 return (
    <>
    { contacts.length > 0 ? (
  
      <ul className={style.grid_contact_list}>
      {contacts.map((contact)=>{
       return <CardContact key={contact.contactId} contact={contact}/>
      })}
     </ul>
    )
    :
    <EmptyContacts/>
    }
   </>
  )
}
