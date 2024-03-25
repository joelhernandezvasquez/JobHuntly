import Link from 'next/link';
import { getTasks } from "@/actions/tasks/getTasks";
import { AuthAdapter } from "@/config/authAdapter";;
import style from './style.module.css';
import { TaskCard } from '@/components/tasks';

export const TaskWidget = async () => {
  const tasks = await getTasks(AuthAdapter.getUserId()!);
  
  return (
   <section className="widget_box">
     <div className={style.task_header}>
       <h2 className="widget_headline">My Tasks</h2>
        <Link className={style.view_task_btn} href="/tasks">View All</Link>
     </div>

     <ul className={style.task_list}>
      {tasks.map((task)=> {
        return <TaskCard key={task.task_id} task={task}/>
      })}
     </ul>
       
   </section>
  )
}
