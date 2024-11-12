import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    PORT: z.ZodDefault<z.ZodNumber>;
    JWT_SECRET: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PORT?: number;
    JWT_SECRET?: string;
}, {
    PORT?: number;
    JWT_SECRET?: string;
}>;
export type Env = z.infer<typeof envSchema>;
