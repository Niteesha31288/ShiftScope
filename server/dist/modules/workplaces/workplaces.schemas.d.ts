import { Workplace } from "@prisma/client";
import { z } from "zod";
export declare const enum WorkplaceStatus {
    ACTIVE = 0,
    SUSPENDED = 1,
    CLOSED = 2
}
export declare const createWorkplaceSchema: z.ZodObject<{
    name: z.ZodString;
    shard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    shard?: number | undefined;
}, {
    name: string;
    shard?: number | undefined;
}>;
export type CreateWorkplace = z.infer<typeof createWorkplaceSchema>;
export type WorkplaceDTO = Omit<Workplace, "shard">;
