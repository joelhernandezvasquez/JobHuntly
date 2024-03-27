import { getTask } from "@/actions/tasks/getTask";

interface Props{
    params:{
        id:string
    }
}

 const Task = async ({params}:Props) => {
    const {id} = params;
    const task = await getTask(id);

    return (
    <div>
        <h1>Tasks</h1>
        {JSON.stringify(task)}
    </div>
  )
}
export default Task
