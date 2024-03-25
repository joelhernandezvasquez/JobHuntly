
import {Task} from '../../../interfaces/Tasks';
import style from './style.module.css';
import { TaskStatus } from '@/components';

interface Props{
 task:Task
}

export const TaskCard = ({task}:Props) => {
  // TODO:CREATE A TASK UNIQUE PAGE TO RENDER TASK PAGE AND PASS THE DATA WHEN CLICK
  
  return (
    <li className={style.task_card}>
      
      <div className={style.task_header}>
      <p className={style.task_heading}>{task.task_name}</p>
      <TaskStatus status={task.status}/>
      </div>
      
      <div className={style.task_info}>
       <p className={style.task_description}>{task.description}</p>
       <p>Due Date: <span className={style.due_date}>{task.due_date.toString()}</span></p>
      </div>
    
    </li>
  )
}
