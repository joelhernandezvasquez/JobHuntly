
'use client';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import style from '../auth_style.module.css';

interface Props{
 isVisible:boolean,
 handleClick:() => void
}

const PasswordHidden = ({isVisible,handleClick}:Props) => {
  return (
    <span role='button' className={style.password_eye_icon} onClick={handleClick}>
     {!isVisible?  <IoEyeOutline size={25}/> :   <IoEyeOffOutline size={25}/> }
    </span>
  )
}

export default PasswordHidden