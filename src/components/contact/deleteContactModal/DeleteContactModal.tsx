
import { useSession } from "next-auth/react";
import { deleteContact } from '@/actions/contact/deleteContact';
import { Toaster,toast} from "sonner";
import { useRouter } from "next/navigation";
import { sleep } from "@/utils/sleep";
import style from './style.module.css';

interface Props{
  id:string,
  closeModal:() => void
}

export const DeleteContactModal = ({id,closeModal}:Props) => {
  const router = useRouter();
  const {data:session} = useSession();

  const onDeleteContact = async() =>{
    try{
      if(session?.user?.email){
        const request = await deleteContact(id,session?.user?.email);
        
        if(!request.ok){
          toast.error(request.message,{position:'top-center'});
          return;
        }
      
         toast.success(request.message,{position:'top-center'});
        
          await sleep(2000);
          closeModal();
          router.refresh();
      }
    }
    catch(error){
      if(error instanceof Error){
        console.log(error.message);
        toast.error(error.message);
      }
      console.log(error);
    } 
  }

  return (
    <div className={style.delete_contact_container}>
        <h2 className={style.heading}>Are you sure you want to delete this contact?</h2>
        <p className={style.sub_heading}>This action cannot be undone. This will permanently delete your contact and 
          remove this contact from our servers.
        </p>
        <div className={style.delete_action_btn_container}>
         <button className={style.action_btn} onClick={closeModal}>Cancel</button>
         <button className={`${style.action_btn} ${style.delete_btn}`} onClick={onDeleteContact}>Delete</button>
        </div>
        <Toaster/>
    </div>
  )
}
