import { z } from 'zod';

export const userScheama = z.object({
    username: z.string().min(3, "Name is required").max(50, "Name can't exceed 50 characters"),
})
export const signUpSchema = z.object({
    username: z.string().min(3, "Name is required").max(50, "Name can't exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
})
// .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
// });

export type SignUpData = z.infer<typeof signUpSchema>;
