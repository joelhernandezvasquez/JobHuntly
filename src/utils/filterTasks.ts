
import { Task } from "@/interfaces/Tasks";
import { CalendarUtils } from "./date.utils";


export const filterTasksByDueDate = (tasks:Task[]) =>{
 
  const filterTasks = tasks.filter((task)=>{
    const taskDueDate = new Date(task.due_date);

    if(CalendarUtils.isDueDate(taskDueDate) && task.status!=='Done'){
      return task;
    }
 })

  return filterTasks;
}