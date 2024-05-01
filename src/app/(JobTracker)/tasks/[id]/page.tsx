import { getTask } from "@/actions/tasks/getTask";
import { notFound } from "next/navigation";

interface Props{
    params:{
        id:string
    }
}

 const Task = async ({params}:Props) => {
    const {id} = params;
    const task = await getTask(id);

   if (!task) {
     notFound();
   }

    return (
    <div>
        <h1>Tasks</h1>
        {JSON.stringify(task)}
    </div>
  )
}
export default Task
