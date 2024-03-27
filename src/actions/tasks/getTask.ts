import { Task } from "@/interfaces/Tasks";

export const getTask = async (taskId:string):Promise<Task> =>{
    try{
      const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/task/${taskId}`);
    
      if(!request.ok){
          console.log(request)
          throw new Error('Error happens while getting the task information');
      }

      return await request.json()
    }
    catch(err){
        if(err instanceof Error){
            throw Error(err.message)
        }
        console.log(err);
        return {
            task_id:'0',
            task_name: 'undefined',
            description:'undefined',
            due_date: new Date(),
            priority:'Low',
            status:'To Do',
            reminder:new Date(),
            created_at:new Date(),
            updated_at:new Date()
        };
    }

}