// src/types/next-auth.d.ts
import  { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      username: string;
      isVerified: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    _id: string;
    email: string;
    username: string;
    isVerified: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id: string;
    email: string;
    username: string;
    isVerified: boolean;
  }
}
