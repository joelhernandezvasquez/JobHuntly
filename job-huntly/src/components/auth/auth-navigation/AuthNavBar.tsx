'use client';

import useAuthNav from "@/hooks/useAuthNav";
import Button from "@/components/Button/Button";
import CompanyLogo from "@/components/companyLogo/CompanyLogo";
import auth from '../auth.module.css';
 
const AuthNavBar = () => {
  const {currentPath,navigateToLogin,navigateToSignUp} = useAuthNav();
  
  return (
    <nav className={auth.auth_nav_wrapper}>
    <CompanyLogo theme="light"/>
     
     {currentPath === 'login' ? (
       <Button type="primary" size="small" handleClick={navigateToSignUp}>
         Sign Up
      </Button>
     ):
     (
      <Button type="primary" size="small" handleClick={navigateToLogin}>
        Login
     </Button>
     )
     }
    </nav>
  )
}

export default AuthNavBar;