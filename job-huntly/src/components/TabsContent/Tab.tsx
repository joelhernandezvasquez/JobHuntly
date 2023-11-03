import {ReactNode} from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
    onClick?:()=> void,
    isActive?:boolean
}
const Tab = ({children,onClick,isActive}:Props) => {
  console.log(isActive)
  return (
    <li className={`${isActive && style.activeTab}`} onClick={onClick}>
      {children}  
       
  </li>
  )
}

export default Tab