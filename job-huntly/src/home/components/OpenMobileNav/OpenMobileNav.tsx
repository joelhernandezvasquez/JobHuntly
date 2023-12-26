'use client';

import useToogle from "@/hooks/useToogle";
import MobileNav from "@/components/ui/MenuNavigation/MobileNav";
import style from './style.module.css';


const OpenMobileNav = () => {
  const {isToggle,handleToggle} = useToogle();
  return (
    <>
   
    <button aria-labelledby="openMenu" className={style.open_menu_btn} onClick={handleToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
      <path d="M13 17.0064H3C2.73478 17.0064 2.48043 17.1119 2.29289 17.2998C2.10536 17.4876 2 17.7424 2 18.0081C2 18.2737 2.10536 18.5285 2.29289 18.7163C2.48043 18.9042 2.73478 19.0097 3 19.0097H13C13.2652 19.0097 13.5196 18.9042 13.7071 18.7163C13.8946 18.5285 14 18.2737 14 18.0081C14 17.7424 13.8946 17.4876 13.7071 17.2998C13.5196 17.1119 13.2652 17.0064 13 17.0064ZM3 8.99327H21C21.2652 8.99327 21.5196 8.88774 21.7071 8.6999C21.8946 8.51206 22 8.25728 22 7.99163C22 7.72598 21.8946 7.47121 21.7071 7.28336C21.5196 7.09552 21.2652 6.98999 21 6.98999H3C2.73478 6.98999 2.48043 7.09552 2.29289 7.28336C2.10536 7.47121 2 7.72598 2 7.99163C2 8.25728 2.10536 8.51206 2.29289 8.6999C2.48043 8.88774 2.73478 8.99327 3 8.99327ZM21 11.9982H3C2.73478 11.9982 2.48043 12.1037 2.29289 12.2916C2.10536 12.4794 2 12.7342 2 12.9998C2 13.2655 2.10536 13.5203 2.29289 13.7081C2.48043 13.896 2.73478 14.0015 3 14.0015H21C21.2652 14.0015 21.5196 13.896 21.7071 13.7081C21.8946 13.5203 22 13.2655 22 12.9998C22 12.7342 21.8946 12.4794 21.7071 12.2916C21.5196 12.1037 21.2652 11.9982 21 11.9982Z" fill="black"/>
      </svg>
    </button>
    
    {isToggle &&  <MobileNav closeMenu = {handleToggle}/>}
    </>
  )
}

export default OpenMobileNav