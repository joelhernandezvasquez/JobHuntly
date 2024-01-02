'use client';

import { usePathname,useRouter} from "next/navigation";

const useAuthNav = () => {
const path = usePathname();
const router = useRouter();

const navigateToLogin = () => {
    router.push('/auth/login');
  }

  const navigateToSignUp = () =>{
   router.push('/auth/register');
  }

  const getPathMessage = (loginMessage:string,registerMessage:string) =>{
    const currentPath = path.slice(path.lastIndexOf('/')+1)
    if (currentPath=== 'login'){
       return loginMessage;
    }
    if(currentPath=== 'register'){
       return registerMessage;
    }
    return '';  
 }
return{
 currentPath:path.slice(path.lastIndexOf('/')+1),
 navigateToLogin:navigateToLogin,
 navigateToSignUp:navigateToSignUp,
 getPathMessage:getPathMessage
}

}

export default useAuthNav