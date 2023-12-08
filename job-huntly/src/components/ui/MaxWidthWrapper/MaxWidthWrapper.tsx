import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
}
const MaxWidthWrapper = ({children}:Props) => {
  return (
    <section className={style.max_wrapper}>
      {children}
    </section>
  )
}

export default MaxWidthWrapper