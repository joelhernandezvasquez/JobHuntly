import { auth } from '@/auth.config';
import { Session} from 'next-auth';

export const AuthAdapter = {
    getSession:async () => {
      try{
        return await auth();
      } 
      catch(err){
       if(err instanceof Error){
        throw Error (err.message);
       }
      }
        
    },
    getUserSessionInfo:async() =>{
      try{
        const session = await AuthAdapter.getSession() as Session;
        return (session.user as any)?.user ?? session.user;
      }
      catch(err){
        if (err instanceof Error){
          throw Error(err.message);
        }
      }
     
    }
}