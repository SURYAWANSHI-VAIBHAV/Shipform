import { User } from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import { NextAuthOptions } from "next-auth";


export const authOptions :NextAuthOptions= {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
      
            const user = await User.findOne({ email: credentials.identifier });
                
            if (!user) {
              // User not found
              return null;
            }
            // Compare the password using bcrypt
            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
      
            if (!isValidPassword) {
              // Invalid password
              return null;
            }
      
            if (user) {
              return {
                  id: user._id.toString(),
                  name: user.name,
                  email: user.email,
                }
            } else {
              return null
      
             
            }
          }
        })
      ],
    pages:{
        signIn:"/signIn"
    },
    callbacks: {
        async session({ session, user, token }) {
          return session
        },
        async jwt({ token, user, account, profile }) {
          return token
    }},
    session:{
        strategy:"jwt"
    },
    secret:""
}