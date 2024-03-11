import NextAuth,{type NextAuthConfig} from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig:NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register',
      },

      callbacks:{
       async jwt({token,user}) {
         console.log({token,user})

         if(user){
          token.data = user
         }
        return token;
       },
      async session({ session, token, user }) {
        session.user = token.data as any;
        return session;
      },
      },

         providers:[
         CredentialsProvider({
          name: "Credentials",
       
        credentials: {
          email: { label: "Email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
         
          const {email,password} = credentials;
        
          const res = await fetch("http://localhost:4000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
          })

          const user = await res.json();
      
          if(user){
             return user;
          }
          return null;

        }
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? ''
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
      })
],

session:{
 strategy:"jwt"
}

}

export const { signIn, signOut, auth, handlers } = NextAuth( authConfig );
