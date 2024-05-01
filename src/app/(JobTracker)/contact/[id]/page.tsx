import { getContact } from "@/actions/contact/getContact";
import { AuthAdapter } from "@/config/authAdapter";
import { notFound } from "next/navigation";

interface Props{
  params:{
    id:string
  }
}

const ContactPage = async({params}:Props) => {
  const {id} = params;
  const userId = AuthAdapter.getUserId();
  const contact  = await getContact(userId!,id);

  if(!contact){
    return notFound();
  }

  return (
    <div>
      Contact
      {JSON.stringify(contact)}
    </div>
  )
}
export default ContactPage


