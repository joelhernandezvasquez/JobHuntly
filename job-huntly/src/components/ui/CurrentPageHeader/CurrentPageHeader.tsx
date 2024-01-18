
'use client';
import useAuthNav from "@/hooks/useAuthNav"

const CurrentPageHeader = () => {
    const {currentPath} = useAuthNav();
  return (
    <h1 style={{textTransform:'capitalize'}}>{currentPath}</h1>
  )
}

export default CurrentPageHeader