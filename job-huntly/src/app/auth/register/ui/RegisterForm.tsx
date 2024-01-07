'use client';
import { FormEvent } from 'react';
import Link from 'next/link';
import useForm from '@/hooks/useForm';
import AuthBtn from '@/components/auth/auth-btn/AuthBtn';
import useLoader from '@/hooks/useLoader';
import useToogle from '@/hooks/useToogle';
import PasswordHidden from '../../ui/PasswordHidden';
import Input from '@/components/Input/Input';
import { signInUser } from '@/actions/auth/login';
import { registerUser } from '@/actions/auth/register';
import {ToastContainer } from 'react-toastify';
import { showValidationErrors } from '@/utils/displayValidationErrors';
import style from '../../auth_style.module.css';
import "react-toastify/dist/ReactToastify.css";


const RegisterForm = () => {
  const {formValues,handleFormValues,isFormSubmitted,updateFormStatus,areFormFieldsNotEmpty} = useForm({fullNameRegister:'',emailAddressRegister:'',passwordRegister:''});
  const{isToggle,handleToggle} = useToogle();
  const {isLoading,initLoader,stopLoader} = useLoader()
  
  const OnSubmit = async(event:FormEvent<HTMLFormElement>) =>{
   event.preventDefault();
   updateFormStatus(true);
   initLoader();
  
   if(!areFormFieldsNotEmpty()) return;
   
   try{
      const registerRequest = await registerUser({fullName:formValues.fullNameRegister,email:formValues.emailAddressRegister,password:formValues.passwordRegister});

      if(registerRequest.errors){
        showValidationErrors(registerRequest);
        stopLoader();
        return;
      }
      signInUser(formValues.emailAddressRegister,formValues.passwordRegister);
    }
   catch(error){
    if(error instanceof Error){
      console.log(error.message);
      stopLoader();
      throw new Error(error.message);
    }
   }
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
          variant={isToggle ? 'text' : 'password'}
          defaultValue={formValues.passwordRegister}
          placeholder='Enter Password'
          isInvalid = { isFormSubmitted && formValues.passwordRegister=== ''}
          errorMessage='Password cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
         />
         <PasswordHidden isVisible={isToggle} handleClick={handleToggle}/>
         </div>
       </div>

       <AuthBtn defaultText='Continue' loadingText='Signing Up' isProccesing={isLoading}/>
        
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