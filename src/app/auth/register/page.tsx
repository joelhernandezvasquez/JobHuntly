import type { Metadata } from 'next';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper/MaxWidthWrapper';
import RegisterForm from './ui/RegisterForm';

export const metadata: Metadata = {
  title: 'JobHuntly | Sign Up',
  description: 'Register to our Job Tracker app for personalized application management',
}

const RegisterPage = () => {
  return (
    <MaxWidthWrapper>
      <RegisterForm/>
    </MaxWidthWrapper>

  )
}

export default RegisterPage