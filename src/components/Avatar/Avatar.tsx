import { ReactNode } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import style from './style.module.css';

interface Props{
  imageSource?:string | StaticImageData,
  size:'small' | 'medium' | 'large',
  children?:ReactNode
}

const Avatar = ({imageSource,size,children}:Props) => {
  return (
    <div className={`${style.avatar_container} ${style[size]}`}>
        {!children && (
         <Image
        className={style.avatar_image}
         width={100}
         height={100}
         src={imageSource!}
         alt={""}
        />
        )}
        {children}
    </div>
  )
}

export default Avatar