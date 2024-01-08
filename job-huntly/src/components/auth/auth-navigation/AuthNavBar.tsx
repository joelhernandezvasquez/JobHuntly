'use client';

import useAuthNav from "@/hooks/useAuthNav";
import useMatchMedia from "@/hooks/useMatchMedia";
import Button from "@/components/Button/Button";
import CompanyLogo from "@/components/companyLogo/CompanyLogo";
import auth from '../auth.module.css';

const AuthNavBar = () => {
  const {currentPath,navigateToLogin,navigateToSignUp} = useAuthNav();
  const {hasCurrentViewportMatch} = useMatchMedia({ media: '(min-width: 1000px)' });
 
  return (
    <nav className={auth.auth_nav_wrapper}>
    <CompanyLogo theme="light"/>
     
     {currentPath === 'login' ? (
       <Button type="primary" size={!hasCurrentViewportMatch?'small' : 'medium'}  handleClick={navigateToSignUp}>
         Sign Up
      </Button>
     ):
     (<Button type="primary"  size={!hasCurrentViewportMatch?'small' : 'medium'} handleClick={navigateToLogin}>
        Login
     </Button>
     )
}
    </nav>
  )
}

export default AuthNavBar;