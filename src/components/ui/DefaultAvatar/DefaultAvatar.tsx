
import { getFirstLetter } from '@/utils/getFirstLetter';
import { getContrastColor } from '@/utils/getContrastColor';
import { hexColor } from '@/types';
import style from './style.module.css';

interface Props{
    userName:string
    backgroundColor?:hexColor
}

const DefaultAvatar = ({userName,backgroundColor}:Props) => {
   const initialLetter = getFirstLetter(userName);
   const initialLetterColor = backgroundColor ? getContrastColor(backgroundColor) : '#000000';

  return (
    <div style={{backgroundColor:backgroundColor || '#FFFFFF'}} className={style.default_avatar_container}>
     <span style={{color:initialLetterColor}}>{initialLetter}</span>
    </div>
  )
}

export default DefaultAvatar