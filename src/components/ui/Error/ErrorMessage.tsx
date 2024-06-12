import { ReactNode } from "react";
import style from './style.module.css';
import { MdError } from "react-icons/md";

interface Props{
    children:ReactNode
}

const ErrorMessage = ({children}:Props) => {
  return (
    <div className={style.error_message_container}>
      <MdError color={"#c02f0e"}/>
      <p role="alert" className={style.error_message}>{children}</p>
    </div>
    
  )
}

export default ErrorMessage