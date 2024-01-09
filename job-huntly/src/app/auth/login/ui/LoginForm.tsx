'use client';

import {FormEvent, useTransition} from 'react';
import Link from 'next/link';
import useToogle from '@/hooks/useToogle';
import AuthBtn from '@/components/auth/auth-btn/AuthBtn';
import {ToastContainer } from 'react-toastify';
import useForm from '@/hooks/useForm';
import Input from '@/components/Input/Input';
import PasswordHidden from '../../ui/PasswordHidden';
import { authenticateUser, signInUser} from '@/actions/auth/login';
import { showValidationErrors } from '@/utils/displayValidationErrors';
import "react-toastify/dist/ReactToastify.css";
import style from '../../auth_style.module.css';

const LoginForm = () => {
 const {formValues,handleFormValues,isFormSubmitted,updateFormStatus,areFormFieldsNotEmpty} = useForm({emailAddressLogin:'',passwordLogin:''});
 const {isToggle,handleToggle} = useToogle();
 const [isPending,startTransition] = useTransition();

  const onSubmit = async(event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    startTransition(async()=>{
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
  })
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
          variant={isToggle ? 'text' : 'password'}
          defaultValue={formValues.passwordLogin}
          placeholder='Enter Password'
          isInvalid = { isFormSubmitted && formValues.passwordLogin === ''}
          errorMessage='Password cannot be empty'
          onValuedChange={()=>{handleFormValues(event)}}
         />
         <PasswordHidden isVisible={isToggle} handleClick={handleToggle}/>
        </div>
       </div>
        <AuthBtn defaultText='Login' loadingText='Authenticating' isProccesing={isPending}/>

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