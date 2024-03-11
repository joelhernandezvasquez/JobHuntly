import {ChangeEvent, useState} from 'react';

type FormFields = {
  [key: string]: string;
};
const useForm = <T extends FormFields>(formFields?: T) => {
  
  const [formValues,setFormValues] = useState<T>(() => formFields as T || {} as T);
  const [isFormSubmitted,setIsFormSubmitted] = useState(false);

  const handleFormValues = (event:ChangeEvent<HTMLInputElement> | any) =>{
    if(formFields)
    setFormValues({...formValues,[event.target.name]:event.target.value});
  }

  const updateFormStatus = (status:boolean) =>{
    setIsFormSubmitted(status);
  }

  const areFormFieldsNotEmpty  = () =>{
    return Object.values(formValues).every((field) => field!=='');
  }

  
 return{
    formValues,
    handleFormValues,
    isFormSubmitted,
    updateFormStatus,
    areFormFieldsNotEmpty
 }
}

export default useForm