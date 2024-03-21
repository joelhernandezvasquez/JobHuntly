import { getTasks } from "@/actions/tasks/getTasks";
import { AuthAdapter } from "@/config/authAdapter";


export const TaskWidget = async () => {

   const tasks = await getTasks(AuthAdapter.getUserId()!);
   console.log(tasks);

  return (
    <div>TaskWidget</div>
  )
}
