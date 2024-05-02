'use client';
import style from './style.module.css'

interface Props{
    callback:() => void
}

export const BlurBackground = ({callback}:Props) => {

    const handleClick = () =>{
        callback();
    }
  return (
    <div className={style.blur_background} onClick={handleClick}></div>
  )
}
