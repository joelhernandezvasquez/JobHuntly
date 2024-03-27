import { Task } from "@/interfaces/Tasks";
import { filterTasksByDueDate } from "@/utils/filterTasks";

export const getTasks = async (userId:string):Promise<Task[]>=>{
   
 try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/:${userId}`,{cache:'no-cache'});

    if(!request.ok){
        console.log(request)
        throw new Error('Error happens while getting the tasks information');
    } 
    return await request.json();
    // console.log(filterTasksByDueDate(tasks));
    // return tasks
 }
 catch(err){
    if(err instanceof Error){
        throw Error(err.message)
    }
    console.log(err);
    return [];
}
}