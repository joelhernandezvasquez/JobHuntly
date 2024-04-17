import { ReactNode } from "react";
import style from './style.module.css';

interface Props{
    children:ReactNode
}

const ErrorMessage = ({children}:Props) => {
  return (
    <p className={style.error_message}>{children}</p>
  )
}

export default ErrorMessage