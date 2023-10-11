import { ReactNode } from 'react';
import style from './button.module.css';

interface Props{
    type: "primary" | "secondary" | "plain",
    size:"small" | "medium" | "large",
    icon?:"none" | "left" | "only",
    children?:ReactNode
}
const Button = ({type,size,icon,children}:Props) => {
  
  return (
   <button 
    className={`${style.button} ${style[type]} ${style[size]}`}
   >
    {children}
   </button>
  )
}

export default Button