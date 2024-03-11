
'use client';
import useAuthNav from "@/hooks/useAuthNav";
import style from './style.module.css';

const CurrentPageHeader = () => {
    const {currentPath} = useAuthNav();
  return (
    <h1 className={style.header_headline}>{currentPath}</h1>
  )
}

export default CurrentPageHeader