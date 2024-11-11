import {z} from 'zod';

export const envSchema = z.object({
    PORT:z.coerce.number().default(3000),
    JWT_SECRET:z.string()
})

export type Env= z.infer<typeof envSchema>