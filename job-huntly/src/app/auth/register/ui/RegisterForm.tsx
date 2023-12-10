'use client';
import Link from 'next/link';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import style from '../../auth_style.module.css';

const RegisterForm = () => {
  return (
    <>
       <form className={style.auth_form}>

       <div className={'form_field'}>
          <label className='label'>Full Name</label>
         <Input
          id='fullNameRegister'
          name='fullNameRegister'
          defaultValue=''
          placeholder='Enter your full name'
          onValuedChange={()=>{}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Email Address</label>
         <Input
          id='emailAddressRegister'
          name='emailAddressRegister'
          defaultValue=''
          placeholder='Enter Email Address'
          onValuedChange={()=>{}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Password</label>
         <Input
          id='passwordRegister'
          name='passwordRegister'
          defaultValue=''
          placeholder='Enter Password'
          onValuedChange={()=>{}}
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
    </>
  )
}

export default RegisterForm