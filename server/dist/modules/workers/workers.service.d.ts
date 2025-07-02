import { Shift, type Worker } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { Page, PaginatedData } from "../shared/shared.types";
import { CreateWorker } from "./workers.schemas";
export declare class WorkersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWorker): Promise<Worker>;
    getById(id: number): Promise<Worker | null>;
    get(parameters: {
        page: Page;
    }): Promise<PaginatedData<Worker>>;
    getClaims(parameters: {
        id: number;
        page: Page;
    }): Promise<PaginatedData<Shift>>;
}
