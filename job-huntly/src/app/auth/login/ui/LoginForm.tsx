'use client';

import Link from 'next/link';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import style from '../../auth_style.module.css'

const LoginForm = () => {
  return (
    <>
    <form className={style.auth_form}>
        <div className={'form_field'}>
          <label className='label'>Email Address</label>
         <Input
          id='emailAddressAuth'
          name='emailAddressLogin'
          defaultValue=''
          placeholder='Enter Email Address'
          onValuedChange={()=>{}}
         />
        </div>

        <div className={'form_field'}>
          <label className='label'>Password</label>
         <Input
          id='passwordAuth'
          name='passwordLogin'
          defaultValue=''
          placeholder='Enter Password'
          onValuedChange={()=>{}}
         />
        </div>

        <Button type='primary' size='large' fullWidth>
          Login
        </Button>

        <div className={style.auth_footer_form}>
        <p>Don’t have an account?</p>
        <Link className={style.link} href={'/auth/register'}>Sign Up</Link>
    </div>
    </form>
    </>
  )
}

export default LoginForm