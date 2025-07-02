import { Worker } from "@prisma/client";
import { z } from "zod";
export declare const enum WorkerStatus {
    ACTIVE = 0,
    SUSPENDED = 1,
    CLOSED = 2
}
export declare const createWorkerSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type CreateWorker = z.infer<typeof createWorkerSchema>;
export type WorkerDTO = Omit<Worker, "shard">;
