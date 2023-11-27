'use client'

import Button from '@/components/Button/Button';
import style from '../style.module.css';
import { useRouter } from 'next/navigation';


const SignUpBtn = () => {
    const router = useRouter();

    const redirectToSignUpPage  = () =>{
      router.push('/signUp');
    }
  
    return (
    <div className={style.button_container}>
       <Button size={'medium'} type={'secondary'} handleClick={redirectToSignUpPage}>
        Sign Up For Free
      </Button>
     </div>
  )
}

export default SignUpBtn