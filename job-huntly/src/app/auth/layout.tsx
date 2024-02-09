import { auth } from "@/auth.config";
import AuthHeader from "@/components/auth/auth-header/AuthHeader";
import AuthNavBar from "@/components/auth/auth-navigation/AuthNavBar";
import { redirect } from "next/navigation";
import {AuthAdapter} from '../../config/authAdapter.ts';

interface Props{
  children:React.ReactNode,
  session:any
}

export default async function AuthLayout({children}:Props) {

  const session = await AuthAdapter.getSession();

  if(session?.user){
    redirect('/dashboard');
  }

    return (
       <main>
       <AuthNavBar/>
       <AuthHeader/>
       {children}
     </main>
     
    )
  }
  