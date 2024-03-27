import { Priority, Status } from "@/types";

export interface Task {
    task_id:string,
    task_name: string,
    description:string,
    due_date: Date,
    priority: Priority,
    status:Status,
    reminder?:Date
    created_at:Date,
    updated_at:Date
}