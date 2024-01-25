'use client';

import useToogle from "@/hooks/useToogle";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const SwitchTheme = () => {
  const {isToggle,handleToggle} = useToogle();

  return (
    <button aria-labelledby="themeColor" className="reset_btn" onClick={handleToggle}>
      {!isToggle ? <IoSunnyOutline size={25}/> : <IoMoon/>}
    </button>
  )
}

export default SwitchTheme