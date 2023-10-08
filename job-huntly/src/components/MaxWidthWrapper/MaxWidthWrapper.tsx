import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
}
const MaxWidthWrapper = ({children}:Props) => {
  return (
    <div className={style.max_wrapper}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper