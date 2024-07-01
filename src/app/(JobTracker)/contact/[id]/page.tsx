import { getContact } from "@/actions/contact/getContact";
import { ViewContactProfile } from "@/components/contact/ViewContactProfile/ViewContactProfile";
import { AuthAdapter } from "@/config/authAdapter";
import { Contact } from "@/interfaces/Contact";
import { notFound } from "next/navigation";

interface Props{
  params:{
    id:string
  }
}

const ContactPage = async({params}:Props) => {
  const {id} = params;
  const userId = await AuthAdapter.getUserId();
  const request  = await getContact(userId,id);
 
  if(!request){
    return notFound();
  }

  return (
    <section>
       <ViewContactProfile contact={request.contact}/>
    </section>
  )
}
export default ContactPage


