import { type Workplace } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { Page, PaginatedData } from "../shared/shared.types";
import { CreateWorkplace } from "./workplaces.schemas";
export declare class WorkplacesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWorkplace): Promise<Workplace>;
    getById(id: number): Promise<Workplace | null>;
    get(parameters: {
        page: Page;
    }): Promise<PaginatedData<Workplace>>;
}
