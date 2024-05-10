import useMatchMedia from "@/hooks/useMatchMedia";
import { GrLinkNext } from "react-icons/gr";

interface Props{
  closeMenu:()=> void
}

const CloseMenuButton = ({closeMenu}:Props) => {
  
 return (
    <>
        <button aria-labelledby="closeMenu"  className={'reset_btn'} onClick={closeMenu}>
        <GrLinkNext size={20} color={'#25324B'} />
      </button>
  </>
  )
}

export default CloseMenuButton