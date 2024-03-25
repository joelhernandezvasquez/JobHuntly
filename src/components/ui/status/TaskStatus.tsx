import { Status } from "@/types";
import style from './style.module.css';

interface Props{
    status:Status
}
export const TaskStatus = ({status}:Props) => {

  const getStatusColor = (status:Status) => {
    if(status ==='To Do'){
      return{
        color:'#25324B',
       backgroundColor:'#FFC107',
      } 
    }

    if(status ==='In Progress'){
      return{
       backgroundColor:'#26A4FF',
      } 
    }

    if(status ==='Done'){
      return{
       backgroundColor:'#56CDAD'
      } 
    }
  }

  return (
    <div style={getStatusColor(status)} className={style.task_status}>
      {status}
    </div>
  )
}
