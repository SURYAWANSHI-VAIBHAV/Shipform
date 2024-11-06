// src/schemas/auth.ts
import { z } from 'zod';

export const verifyCodeSchema = z.object({
  email: z.string().email('Invalid email address'),
  code: z
    .string()
    .length(6, 'Verification code must be exactly 6 digits')
    .regex(/^\d{6}$/, 'Verification code must be numeric'),
});

export type VerifyCodeData = z.infer<typeof verifyCodeSchema>;
