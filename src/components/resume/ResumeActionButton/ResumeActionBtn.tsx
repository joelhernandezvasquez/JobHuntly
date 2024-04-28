'use client';
import { useRouter } from "next/navigation";
import useToogle from "@/hooks/useToogle";
import { useOutSideClick } from "@/hooks/useOutSideClick";
import { ActionModalMenu } from "@/components/ui/ActionModalMenu/ActionModalMenu";
import { ActionButton } from "@/components/ui/ActionButton/ActionButton";
import style from './style.module.css';

interface Prop{
  ResumeId:string
}

export const ResumeActionBtn = ({ResumeId}:Prop) => {
  const {isToggle,handleToggle} = useToogle();
  const modalRef = useOutSideClick(handleToggle);
  const router = useRouter();

  const onViewFile = () =>{
   router.push(`/resume/${ResumeId}`)
  }

   const onEditFile = () =>{
       alert('on edit application');
   }
   const onDeleteFile = () =>{
       alert('on delete application');
   }

  return (
    <div className={style.resume_actions}>
    <ActionButton className={style.actions_btn} callback={handleToggle}/>
   
    { isToggle &&
      <div ref={modalRef}>

      <ActionModalMenu>
      <ActionModalMenu.Action action={onViewFile}>View resume</ActionModalMenu.Action>
      <ActionModalMenu.Action action={onEditFile}>Edit resume</ActionModalMenu.Action>
      <ActionModalMenu.Action action ={onDeleteFile}>Delete resume</ActionModalMenu.Action>
      </ActionModalMenu>
      
      </div> 
    }
   </div>
  )
}
