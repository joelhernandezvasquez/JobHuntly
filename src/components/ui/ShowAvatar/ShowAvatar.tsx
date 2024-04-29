'use client';
import { ReactNode } from 'react';
import Image from 'next/image';
import DefaultAvatar from "../DefaultAvatar/DefaultAvatar";
import useToogle from '@/hooks/useToogle';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import style from './style.module.css';

interface Props{
  user:{
   name: string,
   image: null | string
  },
  children?:ReactNode
}
const ShowAvatar = ({user,children}:Props) => {
    
const {isToggle,handleToggle} = useToogle();
const modalRef = useOutSideClick(handleToggle);
    
  return (
    <>
    <div className={style.avatar_image_container} onClick={handleToggle}>
      { user?.image ? ( 
        <Image 
          className={style.avatar_image}
          width={50}
          height={50}
          src={user?.image}
          alt={`${user.name} avatar image`}
        /> )
       :
       <DefaultAvatar userName={user.name} backgroundColor='#7B61FF'/>
      }
     </div>
   
    {isToggle && 
    <div className = {style.container_children} ref={modalRef}>
        {children}
    </div>
   
    }
    </>
  )}

export default ShowAvatar