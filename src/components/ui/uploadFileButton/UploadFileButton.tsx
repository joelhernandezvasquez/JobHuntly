
import { IoCloudUploadOutline } from 'react-icons/io5';
import style from './style.module.css';

export const UploadFileButton = () => {

const onSelectFile = (event:MouseEvent) =>{
event.stopPropagation()
}
  return (
    <button className={style.upload_btn} onClick={()=>onSelectFile}>
     <IoCloudUploadOutline size={25} color={'#4640DE'} />
     <span>Choose file</span>
    </button>
  )
}
