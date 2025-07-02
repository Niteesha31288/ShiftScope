import { Shift } from "@prisma/client";
import { z } from "zod";
export declare const createShiftSchema: z.ZodObject<{
    startAt: z.ZodString;
    endAt: z.ZodString;
    workerId: z.ZodOptional<z.ZodString>;
    workplaceId: z.ZodNumber;
    shard: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    startAt: string;
    endAt: string;
    workplaceId: number;
    shard?: number | undefined;
    workerId?: string | undefined;
}, {
    startAt: string;
    endAt: string;
    workplaceId: number;
    shard?: number | undefined;
    workerId?: string | undefined;
}>;
export type CreateShift = z.infer<typeof createShiftSchema>;
export type ShiftDTO = Omit<Shift, "shard">;
