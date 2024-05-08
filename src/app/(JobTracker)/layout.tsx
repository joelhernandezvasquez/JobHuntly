import { redirect } from 'next/navigation';
import { registerUser } from '@/actions/auth/register';
import { validateUser } from '@/actions/auth/validateUser';
import TopHeader from '@/components/ui/TopHeader/TopHeader';
import MenuSideBar from '@/components/ui/MenuSideBar/MenuSideBar';
import { AuthAdapter } from '@/config/authAdapter';
import style from './main-layout.module.css';
interface Props{
  children:React.ReactNode
}

export default async function JobTrackerLayout({children}:Props) {
     
  const session = await AuthAdapter.getSession();
  
   if(session?.user){
    const isUserRegistered = await validateUser(session.user.email || '');
    
    if(!isUserRegistered){
      await registerUser({ 
        fullName:session?.user.name as string,
        email:session?.user.email as string,
        password:`${session?.user?.id}-${session?.user.name}`
      });
    }
} 
   else{
    redirect('/auth/login');
   }

  return (
       <main className={style.main}>
        <TopHeader/>
        <MenuSideBar/>
        <section className={style.main_body}>
        {children}
        </section>
        
     </main>
     
    )
  }