import { getUserId } from '@/actions/auth/getUserId';
import { auth } from '@/auth.config';
import { Session} from 'next-auth';

// let userID:string = '' ;

// const setUserID = (idValue:string) =>{
//    if(userID === idValue) return;
//      userID = idValue;
// }

export const AuthAdapter = {
 
    getSession:async () => {
      try{
        const session = await auth();
        // setUserID(session?.user?.id ?? (session?.user as any)?.user?.id);
        
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
    getUserId:async()=>{
      try{
        const session = await auth();

        if(session?.user?.email){
          const request = await getUserId(session?.user?.email);
          return request.userId;
        }
       
      }
      catch(err){
        if(err instanceof Error){
          console.log(err.message)
          throw Error (err.message);
         }
      }
    }
}