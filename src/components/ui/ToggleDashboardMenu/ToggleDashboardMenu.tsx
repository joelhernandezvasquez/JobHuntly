'use client';

import { useUIStore } from "@/store";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";

const ToggleDashboardMenu = () => {
  const isDashboardMenuOpen = useUIStore(state => state.isDashboardMenuOpen);

  return (
    <>
     { !isDashboardMenuOpen ? <OpenMenuButton/> : <CloseMenuButton/> }
    </>
  )
}

export default ToggleDashboardMenu