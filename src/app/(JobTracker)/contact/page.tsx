import { getContacts } from "@/actions/contact/getContacts";
import { AuthAdapter } from "@/config/authAdapter";
import { MaxWidthWrapper } from "@/components";
import { CardContentList } from "@/components/contact/CardContentList/CardContentList";
import { OpenContactForm } from "@/components/contact/ui/OpenContactForm/OpenContactForm";

const Contacts = async() => {

 const userId = await AuthAdapter.getUserId();
 const contacts = await getContacts(userId);

  return (
    <MaxWidthWrapper>
      { contacts.length > 0 && <OpenContactForm userId={userId}/>}
      <CardContentList contacts={contacts}/>
    </MaxWidthWrapper>
  )
}

export default Contacts