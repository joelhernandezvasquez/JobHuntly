
import Link from 'next/link';
import {Task} from '../../../interfaces/Tasks';
import { TaskStatus } from '@/components';
import { CalendarUtils } from '@/utils/date.utils';
import style from './style.module.css';
interface Props{
 task:Task
}

export const TaskCard = ({task}:Props) => {
  const taskStatus = task.status.replaceAll(' ', '');
  const dueDate = CalendarUtils.getDayAndMonth(task.due_date.toString());
  
  return (
    <li className={style.task_card}>
       <div className={`${style.status_border} ${style[taskStatus]}`}></div>
        
       <div className={style.task_grid_wrapper}>
           <div className={style.task_checkbox}>
               <input className={style[taskStatus]} 
                type="checkbox" 
                name={task.task_id}
               />
           </div>
           
           <div>
           <Link href={`/tasks/${task.task_id}`}>
             <p className={style.task_heading}>{task.task_name}</p>
             <p className={style.due_date}>
              <span>{dueDate.day} </span>
              <span>{dueDate.month} </span>
              <span>{dueDate.year}</span>
             </p>
             </Link> 
           </div>

           <div>
             <TaskStatus status={task.status}/>
           </div>
       </div>
    </li>
  )
}
