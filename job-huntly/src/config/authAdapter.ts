import { auth } from '@/auth.config';
import { Session} from 'next-auth';

let userID:string = '' ;

const setUserID = (idValue:string) =>{
   if(userID === idValue) return;
     userID = idValue;
}

export const AuthAdapter = {
 
    getSession:async () => {
      try{
        const session = await auth();
        setUserID(session?.user?.id ?? (session?.user as any)?.user?.id);
        
       return session;
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
     
    },
    getUserId:()=>{
      if(userID!=='') return userID;
    }
}