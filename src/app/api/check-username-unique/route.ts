// pages/api/check-username-unique.ts

import { dbConnect } from '@/lib/dbConfig';
import User from '@/model/User';
import { userScheama } from '@/schemas/signUpSchema';
import { URL } from 'url';
import { z } from 'zod';

const usernameSchema = z.object({
  username:userScheama
});

export  async function GET(req:Request, res:Response) {
    await dbConnect();
    try {
        const {searchParams}=  new URL(req.url);
        console.log(searchParams)
        const queryParams={
            username:searchParams.get("username")
        }

      const result = usernameSchema.safeParse(queryParams);
      console.log(result)

      if(!result.success){
        const usernameErrors= result.error.format().username?._errors || []
        return Response.json({ success:false, message: usernameErrors.length>0?usernameErrors.join(', '):"invaild query parameter" },{status:409});
      }
      const {username}=result.data

      const user = await User.findOne({ username ,isVerified:true});
      if (user) {
        return Response.json({ message: 'Username is already taken' },{status:409});
      }

      return Response.json({ message: 'Username is available' },{status:200});
    } catch (error) {
      if (error instanceof z.ZodError) {
        return Response.json({ errors: error.errors },{status:400});
      }

      console.error('Error checking username:', error);
      return Response.json({ message: 'Internal Server Error' },{status:500});
    }
}
