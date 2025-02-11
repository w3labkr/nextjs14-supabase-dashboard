import { z } from 'zod'

export const registerFormSchema = z
  .object({
    email: z.string().min(4).max(255).email(),
    // If the password is larger than 72 chars, it will be truncated to the first 72 chars.
    newPassword: z.string().min(6).max(72),
    confirmNewPassword: z.string().min(6).max(72),
  })
  .refine((val) => val.newPassword === val.confirmNewPassword, {
    path: ['confirmNewPassword'],
  })

export const loginFormSchema = z.object({
    email: z.string().max(255).email(),
    password: z.string().min(6).max(72),
  })
