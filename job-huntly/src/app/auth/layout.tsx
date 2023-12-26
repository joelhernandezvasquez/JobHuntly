import AuthHeader from "@/components/auth/auth-header/AuthHeader";
import AuthNavBar from "@/components/auth/auth-navigation/AuthNavBar";
import AuthProvider from "./AuthProvider";

interface Props{
  children:React.ReactNode,
  session:any
}

export default function AuthLayout({children,session}:Props) {
    return (
    
       <main>
       <AuthNavBar/>
       <AuthHeader/>
       {children}
     </main>
     
    )
  }
  