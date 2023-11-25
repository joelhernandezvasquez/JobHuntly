import Image from "next/image"
import { StaticImageData } from "next/image";
import style from './style.module.css';

interface Props{
  imageSource:string | StaticImageData,
  size:'small' | 'medium' | 'large'
}

const Avatar = ({imageSource,size}:Props) => {
  return (
    <div className={`${style.avatar_container} ${style[size]}`}>
        <Image
        className={style.avatar_image}
         width={100}
         height={100}
         src={imageSource}
         alt={""}
        />
    </div>
  )
}

export default Avatar