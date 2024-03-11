'use client';

import { ReactNode } from 'react';
import style from './button.module.css';
interface Props{
    type: "primary" | "secondary" | "plain",
    size:"small" | "medium" | "large",
    fullWidth?:boolean,
    icon?:"none" | "left" | "only",
    handleClick?:() => void,
    isDisabled?:boolean
    children?:ReactNode,
}
const Button = ({type,size,fullWidth,icon,handleClick,isDisabled,children}:Props) => {
  
  return (
   <button 
    className={`${style.button} ${style[type]} ${style[size]} ${icon==='left' && style.flex_center} ${fullWidth && style.full_width} ${isDisabled && style.disable_btn}`}
    onClick={handleClick}
    disabled={isDisabled}
   >
    {children}
   </button>
  )
}

export default Button