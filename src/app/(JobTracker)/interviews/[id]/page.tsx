import { getInterview } from "@/actions/interview/getInterview";
import { AuthAdapter } from "@/config/authAdapter";
import { notFound } from "next/navigation";

interface Props{
    params:{
        id:string
    }
}

const InterviewPage = async ({params}:Props) => {
   const {id} = params;
   const userId = await AuthAdapter.getUserId();
   const interview = await getInterview(userId!,id);

   if(!interview){
    notFound();
   }
    return (
    <div>{JSON.stringify(interview)} </div>
  )
}

export default InterviewPage