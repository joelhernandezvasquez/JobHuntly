
import type { Metadata } from 'next';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper/MaxWidthWrapper';
import LoginForm from './ui/LoginForm';

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