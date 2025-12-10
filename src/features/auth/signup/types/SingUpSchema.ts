import { z } from 'zod'

export const SignupSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain one uppercase letter')
    .regex(/[0-9]/, 'Password must contain one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain one special character'),
})

export type SignupType = z.infer<typeof SignupSchema>
