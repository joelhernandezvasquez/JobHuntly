import { ReactNode } from 'react';
import { getClassNames } from '@/utils/getClassNames';
import style from './style.module.css';

interface Props{
    children:ReactNode
    flex?:boolean
    flexCenter?:boolean
    flexGapSm?:boolean
}
const MaxWidthWrapper = ({children,flex,flexCenter,flexGapSm}:Props) => {
 
  const classNames= getClassNames(
    style.max_wrapper,
    flex ? style.flex:'',
    flexCenter ? style.flexCenter:'',
    flexGapSm ? style.flexGapSm:''
  )
 
  return (
    <section 
    className={classNames}>
    {children}
    </section>
  )
}

export default MaxWidthWrapper