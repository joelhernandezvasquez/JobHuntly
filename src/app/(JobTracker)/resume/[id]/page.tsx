import { getResume } from "@/actions/resume/getResume";
import { AuthAdapter } from "@/config/authAdapter";
import { notFound } from "next/navigation";


interface Props{
    params:{
        id:string
    }
}

const ResumePage = async({params}:Props) => {
  //  const {id} = params;
  //  const resume = await getResume(AuthAdapter.getUserId()!,id); 

  //  if(!resume){
  //   return notFound();
  //  }
   
  // return (
  //   <div>
  //   {JSON.stringify(resume)}
  //   </div>
  // )
}
export default ResumePage;
