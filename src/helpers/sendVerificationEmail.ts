import { Resend } from 'resend';
import { VerifyEmail } from '../../emails/verifyEmail';
import { ApiResponse } from '@/types/apiResponse';

const resend = new Resend(process.env.RESEND_API_KEY);

export  async function SendVerificationEmail (email:string,username:string,verifyCode:string):Promise<ApiResponse> {
  try {
     await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Verification Code',
      react: VerifyEmail({ username,verifyCode }),
    });
  

    return {success:true,message:"verification message send"}
  } catch (error) {
    console.log("error to send verification message",error)
    return {success:false,message:"verification message not send"}
  }
};
