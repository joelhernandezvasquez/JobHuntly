import {useState} from 'react'

const useForm = () => {
  const [isFormSubmitted,setIsFormSubmitted] = useState(false);

  const updateFormStatus = (status:boolean) =>{
    setIsFormSubmitted(status);
  }
  
 return{
    isFormSubmitted,
    updateFormStatus
 }
}

export default useForm