import { getApplication } from "@/actions/applications/getApplication";
import { AuthAdapter } from "@/config/authAdapter";
import { notFound } from "next/navigation";

interface Props{
    params:{
        id:string
    }
}

const Application = async({params}:Props) => {
    const userId = await AuthAdapter.getUserId() as string;
    const {id}  = params;
    const application = await getApplication(userId,id);

    if(!application){
      notFound(); 
    }

  return (
    <div>
      <p>page application - {id}</p>
      {JSON.stringify(application)}
    </div>
  )
}
export default Application
