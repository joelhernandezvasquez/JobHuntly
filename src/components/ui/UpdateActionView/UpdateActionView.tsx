import { UpdateContactModal } from "@/components/contact/ui/ContactForms/UpdateContactModal"
import { Contact } from "@/interfaces/Contact"
import { views } from "@/types"

interface Props{
    view:views,
    data:any
    closeModal:() => void
}

const UpdateViews:any = {
    contact:UpdateContactModal,
}

export const UpdateActionView = ({data,closeModal,view}:Props) => {
    const CurrentView = UpdateViews[view];
  return (
    <>
     <CurrentView closeModal={closeModal} data={data}/>
   </>
  )
}
