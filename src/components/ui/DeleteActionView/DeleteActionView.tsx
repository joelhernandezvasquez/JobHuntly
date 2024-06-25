
import { DeleteContactModal } from "@/components/contact/deleteContactModal/DeleteContactModal";
import { views } from "@/types";

interface Props{
    id:string,
    view:views,
    closeModal:() => void
}

const DeleteViews:any = {
    contact:DeleteContactModal,
}

export const DeleteActionView = ({id,closeModal,view}:Props) => {
    const CurrentView = DeleteViews[view]
  return (
    <>
     <CurrentView closeModal={closeModal} id={id}/>
    </>
  )
}
