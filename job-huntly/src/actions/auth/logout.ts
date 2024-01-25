import { signOut} from "next-auth/react";

export const logoutUser = () =>{
    signOut({
        callbackUrl:'/auth/login'
    });
}