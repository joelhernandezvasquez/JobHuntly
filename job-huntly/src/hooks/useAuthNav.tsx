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
return{
 currentPath:path.slice(path.lastIndexOf('/')+1),
 navigateToLogin:navigateToLogin,
 navigateToSignUp:navigateToSignUp
}

}

export default useAuthNav