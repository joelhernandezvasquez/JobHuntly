import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
    flex?:boolean
    flexCenter?:boolean
    flexGapSm?:boolean
}
const MaxWidthWrapper = ({children,flex,flexCenter,flexGapSm}:Props) => {
  return (
    <section 
      className={`${style.max_wrapper} ${flex && style.flex} ${flexCenter && style.flexCenter} ${flexGapSm && style.flexGapSm}`}>
      {children}
    </section>
  )
}

export default MaxWidthWrapper