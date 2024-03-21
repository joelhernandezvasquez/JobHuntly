import { Task } from "@/interfaces/Tasks";

export const getTasks = async (userId:string):Promise<Task[]>=>{
    console.log(userId)
 try{
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/task:${userId}`);

    if(!request.ok){
        console.log(request)
        throw new Error('Error happens while getting the tasks information');
    } 
    
    return await request.json()
 }
 catch(err){
    if(err instanceof Error){
        throw Error(err.message)
    }
    console.log(err);
    return [];
}
}