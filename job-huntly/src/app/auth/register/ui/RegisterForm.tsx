'use client';
import { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useForm from '@/hooks/useForm';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { registerUser } from '@/actions/auth/register';
import {ToastContainer } from 'react-toastify';
import { showValidationErrors } from '@/utils/displayValidationErrors';
import style from '../../auth_style.module.css';
import "react-toastify/dist/ReactToastify.css";


const RegisterForm = () => {
  const {formValues,handleFormValues,isFormSubmitted,updateFormStatus,areFormFieldsNotEmpty} = useForm({fullNameRegister:'',emailAddressRegister:'',passwordRegister:''});
  const router = useRouter();

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
      router.push('/dashboard');
    }
   catch(error){
    if(error instanceof Error){
      console.log(error.message);
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
          defaultValue={formValues.emailAddressRegister}
          isInvalid = { isFormSubmitted && formValues.emailAddressRegister=== ''}
          errorMessage='Email Address cannot be empty'
          placeholder='Enter Email Address'
          onValuedChange={()=>{handleFormValues(event)}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Password</label>
         <Input
          id='passwordRegister'
          name='passwordRegister'
          defaultValue={formValues.passwordRegister}
          placeholder='Enter Password'
          isInvalid = { isFormSubmitted && formValues.passwordRegister=== ''}
          errorMessage='Password cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
          
         />
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