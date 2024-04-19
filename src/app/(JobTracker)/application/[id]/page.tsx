import { getApplication } from "@/actions/applications/getApplication";
import { AuthAdapter } from "@/config/authAdapter";

interface Props{
    params:{
        id:string
    }
}

const Application = async({params}:Props) => {
    const userId = AuthAdapter.getUserId() as string;
    const {id}  = params;
    const application = await getApplication(userId,id);

  return (
    <div>
      <p>page application - {id}</p>
      {JSON.stringify(application)}
    </div>
  )
}
export default Application
