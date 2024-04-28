import { getResume } from "@/actions/resume/getResume";
import { AuthAdapter } from "@/config/authAdapter";


interface Props{
    params:{
        id:string
    }
}

const ResumePage = async({params}:Props) => {
   const {id} = params;
   const resume = await getResume(AuthAdapter.getUserId()!,id); 
  return (
    <div>
    {JSON.stringify(resume)}
    </div>
  )
}
export default ResumePage;
