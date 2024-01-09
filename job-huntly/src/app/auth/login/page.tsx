
import type { Metadata } from 'next';

import LoginForm from './ui/LoginForm';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper/MaxWidthWrapper';

export const metadata: Metadata = {
  title: 'JobHuntly | Member Login',
  description: 'Simplify your job search! Log in to our Job Tracker app for personalized application management',
}
const LoginPage = () => {
  return (
   <MaxWidthWrapper>
       <LoginForm/>
   </MaxWidthWrapper>
      
   
   
  )
}

export default LoginPage