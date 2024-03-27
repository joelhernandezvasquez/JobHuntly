import { Task } from "@/interfaces/Tasks";

export const filterTasksByDueDate = (tasks:Task[]) =>{
 const today = new Date();
 const todayDate = new Date(today.getFullYear(),today.getMonth(),today.getDate());

 const filterTasks = tasks.filter((task)=>{
    console.log(typeof task.due_date);
    
    const taskDueDate = new Date(task.due_date.getFullYear(),task.due_date.getMonth(),task.due_date.getDate());
 
    return taskDueDate.getTime() === todayDate.getTime();

 })

 console.log(filterTasks);

}