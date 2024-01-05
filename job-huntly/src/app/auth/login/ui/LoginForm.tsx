'use client';

import {FormEvent} from 'react';
import Link from 'next/link';
import useToogle from '@/hooks/useToogle';
import {ToastContainer } from 'react-toastify';
import useForm from '@/hooks/useForm';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { authenticateUser, signInUser} from '@/actions/auth/login';
import { showValidationErrors } from '@/utils/displayValidationErrors';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import style from '../../auth_style.module.css';


const LoginForm = () => {
 const {formValues,handleFormValues,isFormSubmitted,updateFormStatus,areFormFieldsNotEmpty} = useForm({emailAddressLogin:'',passwordLogin:''});
 const{isToggle,handleToggle} = useToogle();

  const onSubmit = async(event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    updateFormStatus(true);
    
    if(!areFormFieldsNotEmpty()) return;
   
    try{
       const loginRequest = await authenticateUser(formValues.emailAddressLogin,formValues.passwordLogin);
    
       if(loginRequest.errors){
         showValidationErrors(loginRequest);
         return;
       }
        signInUser(formValues.emailAddressLogin,formValues.passwordLogin);
    }
    catch(error){
      console.log(error);
    }
  }

  const onTogglePasswordVisible = () =>{
    handleToggle();
  }

  return (
    <>
    <form className={style.auth_form} onSubmit={onSubmit}>
        <div className={'form_field'}>
          <label className='label'>Email Address</label>
         <Input
          id='emailAddressAuth'
          name='emailAddressLogin'
          variant='text'
          defaultValue={formValues.emailAddressLogin}
          placeholder='Enter Email Address'
          isInvalid = { isFormSubmitted && formValues.emailAddressLogin === ''}
          errorMessage='Email Address cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Password</label>

          <div className={style.auth_password_field}>
          <Input
          id='passwordAuth'
          name='passwordLogin'
          variant={!isToggle ? 'text' : 'password'}
          defaultValue={formValues.passwordLogin}
          placeholder='Enter Password'
          isInvalid = { isFormSubmitted && formValues.passwordLogin === ''}
          errorMessage='Password cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
         />
           <span role='button' className={style.password_eye_icon} onClick={onTogglePasswordVisible}>
              {!isToggle ?  <IoEyeOutline size={25}/> :   <IoEyeOffOutline size={25}/> }
            </span>
        </div>
        
        </div>

        <Button type='primary' size='large' fullWidth>
          Login
        </Button>

        <div className={style.auth_footer_form}>
        <p>Don’t have an account?</p>
        <Link className={style.link} href={'/auth/register'}>Sign Up</Link>
        </div>
    </form>
    <ToastContainer role="alert"/>
    </>
  )
}

export default LoginForm