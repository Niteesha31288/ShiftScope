import { type Shift } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { Page, PaginatedData } from "../shared/shared.types";
import { CreateShift } from "./shifts.schemas";
export declare class ShiftsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateShift): Promise<Shift>;
    getById(id: number): Promise<Shift | null>;
    get(parameters: {
        page: Page;
    }): Promise<PaginatedData<Shift>>;
    claim(id: number, workerId: number): Promise<Shift>;
    cancel(id: number): Promise<Shift>;
}
