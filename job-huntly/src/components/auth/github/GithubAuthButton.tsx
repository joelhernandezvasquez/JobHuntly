
'use client';
import { signIn } from "next-auth/react";
import Button from '@/components/Button/Button';
import { IoLogoGithub } from 'react-icons/io5';

interface Props{
    buttonText:string
}

const githubSignIn = () =>{
    signIn('github',{
        callbackUrl:'/dashboard'
    });
}
const GithubAuthButton = ({buttonText}:Props) => {
  return (
    <Button type='secondary' size="medium" icon='left' handleClick={githubSignIn}>
      <IoLogoGithub size={25} color={'black'}/>
      {buttonText}
     </Button>
  )
}

export default GithubAuthButton