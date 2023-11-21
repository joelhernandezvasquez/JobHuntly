'use client';

import { ReactNode } from 'react';
import style from './button.module.css';

interface Props{
    type: "primary" | "secondary" | "plain",
    size:"small" | "medium" | "large",
    icon?:"none" | "left" | "only",
    handleClick?:() => void,
    children?:ReactNode
}
const Button = ({type,size,icon,handleClick,children}:Props) => {
  
  return (
   <button 
    className={`${style.button} ${style[type]} ${style[size]}`}
    onClick={handleClick}
   >
    {children}
   </button>
  )
}

export default Button