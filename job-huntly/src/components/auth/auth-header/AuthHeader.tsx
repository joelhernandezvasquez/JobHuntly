'use client';

import useAuthNav from '@/hooks/useAuthNav';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper/MaxWidthWrapper';
import GithubAuthButton from '../github/GithubAuthButton';
import GoogleAuthButton from '../google/GoogleAuthButton';
import auth from '../auth.module.css';
   
const AuthHeader = () => {
   const {getPathMessage} = useAuthNav();

  return (
     <MaxWidthWrapper>
     <div className={auth.auth_header}>
     <h2 className={auth.auth_header_title}>
      {getPathMessage('Welcome Back',`Let's Go`)}
     </h2>
     <GoogleAuthButton buttonText={getPathMessage('Login With Google','Sign Up With Google')}/>
     <GithubAuthButton buttonText={getPathMessage('Login With Github','Sign Up With Github')}/>

     <div className={auth.legend_container}>
         <div className={auth.divider}></div>
         <p>
            {getPathMessage('Or login with email','Or sign up with email')}
         </p>
         <div className={auth.divider}></div>
     </div>
     </div>
     </MaxWidthWrapper> 
  )
}

export default AuthHeader