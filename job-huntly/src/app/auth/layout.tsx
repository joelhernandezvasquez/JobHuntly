import AuthHeader from "@/components/auth/auth-header/AuthHeader";
import AuthNavBar from "@/components/auth/auth-navigation/AuthNavBar";

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <main>
       <AuthNavBar/>
       <AuthHeader/>
       {children}
     </main>
    )
  }
  