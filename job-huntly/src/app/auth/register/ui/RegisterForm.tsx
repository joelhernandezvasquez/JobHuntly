'use client';
import { FormEvent } from 'react';
import Link from 'next/link';
import useForm from '@/hooks/useForm';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { signInUser } from '@/actions/auth/login';
import { registerUser } from '@/actions/auth/register';
import {ToastContainer } from 'react-toastify';
import { showValidationErrors } from '@/utils/displayValidationErrors';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import style from '../../auth_style.module.css';
import "react-toastify/dist/ReactToastify.css";
import useToogle from '@/hooks/useToogle';

const RegisterForm = () => {
  const {formValues,handleFormValues,isFormSubmitted,updateFormStatus,areFormFieldsNotEmpty} = useForm({fullNameRegister:'',emailAddressRegister:'',passwordRegister:''});
  const{isToggle,handleToggle} = useToogle();
  
  const OnSubmit = async(event:FormEvent<HTMLFormElement>) =>{
   event.preventDefault();
   updateFormStatus(true);
  
   if(!areFormFieldsNotEmpty()) return;
   
   try{
      const registerRequest = await registerUser({fullName:formValues.fullNameRegister,email:formValues.emailAddressRegister,password:formValues.passwordRegister});

      if(registerRequest.errors){
        showValidationErrors(registerRequest);
        return;
      }
      signInUser(formValues.emailAddressRegister,formValues.passwordRegister);
    }
   catch(error){
    if(error instanceof Error){
      console.log(error.message);
      throw new Error(error.message);
    }
   }
}

const onTogglePasswordVisible = () =>{
  handleToggle();
}
  return (
    <>
       <form className={style.auth_form} onSubmit={OnSubmit}>

       <div className={'form_field'}>
          <label className='label'>Full Name</label>
         <Input
          id='fullNameRegister'
          name='fullNameRegister'
          variant='text'
          defaultValue={formValues.fullNameRegister}
          isInvalid = { isFormSubmitted && formValues.fullNameRegister=== ''}
          errorMessage='Name cannot be empty'
          placeholder='Enter your full name'
          onValuedChange={()=>{handleFormValues(event)}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Email Address</label>
         <Input
          id='emailAddressRegister'
          name='emailAddressRegister'
          variant="text"
          defaultValue={formValues.emailAddressRegister}
          isInvalid = { isFormSubmitted && formValues.emailAddressRegister=== ''}
          errorMessage='Email Address cannot be empty'
          placeholder='Enter Email Address'
          onValuedChange={()=>{handleFormValues(event)}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Password</label>
          <div className={style.auth_password_field}>
         <Input
          id='passwordRegister'
          name='passwordRegister'
          variant={!isToggle ? 'text' : 'password'}
          defaultValue={formValues.passwordRegister}
          placeholder='Enter Password'
          isInvalid = { isFormSubmitted && formValues.passwordRegister=== ''}
          errorMessage='Password cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
         />
          <span role='button' className={style.password_eye_icon} onClick={onTogglePasswordVisible}>
              {!isToggle ?  <IoEyeOutline size={25}/> :   <IoEyeOffOutline size={25}/> }
            </span>
         </div>
        
        </div>

        <Button type='primary' size='large' fullWidth>
          Continue
        </Button>

        <div className={style.auth_footer_form}>
        <p>Already have an account?</p>
        <Link className={style.link} href={'/auth/login'}>Login</Link>
    </div>
    </form>
    <ToastContainer role="alert"/>
    </>
  )
}

export default RegisterForm