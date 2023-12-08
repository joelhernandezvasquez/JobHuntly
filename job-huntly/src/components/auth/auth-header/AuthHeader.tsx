'use client';

import useAuthNav from '@/hooks/useAuthNav';
import Button from '@/components/Button/Button';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper/MaxWidthWrapper';
import { IoLogoGithub } from 'react-icons/io5';
import auth from '../auth.module.css';

const AuthHeader = () => {
   const {currentPath} = useAuthNav();

  return (
     <MaxWidthWrapper>
     <div className={auth.auth_header}>
     <h2 className={auth.auth_header_title}>
      {currentPath === 'login' && 'Welcome Back User'}
      {currentPath === 'register' && `Let's Go`}
     </h2>

     <Button type="secondary" size="medium" icon='left'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
         <path d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7097C14.0226 13.607 12.1763 15 10.0001 15C7.23883 15 5.00008 12.7612 5.00008 9.99996C5.00008 7.23871 7.23883 4.99996 10.0001 4.99996C11.2747 4.99996 12.4342 5.48079 13.3172 6.26621L15.6743 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.398 1.66663 1.66675 5.39788 1.66675 9.99996C1.66675 14.602 5.398 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2759 8.89579 18.1713 8.36788Z" fill="#FFC107"/>
         <path d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.317 6.26621L15.6741 3.90913C14.1858 2.52204 12.1949 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z" fill="#FF3D00"/>
         <path d="M10 18.3333C12.1525 18.3333 14.1084 17.5095 15.5871 16.17L13.008 13.9875C12.1432 14.6451 11.0865 15.0008 10 15C7.83255 15 5.99213 13.6179 5.2988 11.6891L2.5813 13.7829C3.96047 16.4816 6.7613 18.3333 10 18.3333Z" fill="#4CAF50"/>
         <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.988L13.0079 13.9871L15.5871 16.1696C15.4046 16.3355 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2"/>
      </svg>
      {currentPath === 'login' && 'Login With Google'}
      {currentPath === 'register' && `Sign Up With Google`}
     </Button>

     <Button type='secondary' size="medium" icon='left'>
      <IoLogoGithub size={25} color={'black'}/>
      {currentPath === 'login' && 'Login With Github'}
      {currentPath === 'register' && `Sign Up With Github`}
     </Button>

     <div className={auth.legend_container}>
         <div className={auth.divider}></div>
         <p>{currentPath === 'login' && 'Or login with email'}
            {currentPath === 'register' && `Or sign up with email`}
         </p>
         <div className={auth.divider}></div>
     </div>
     </div>

     </MaxWidthWrapper>
    
  )
}

export default AuthHeader