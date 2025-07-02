import { Workplace } from "@prisma/client";
import { Request } from "express";
import { type Page, PaginatedResponse, type Response } from "../shared/shared.types";
import { type CreateWorkplace } from "./workplaces.schemas";
import { WorkplaceDTO } from "./workplaces.schemas";
import { WorkplacesService } from "./workplaces.service";
export declare class WorkplacesController {
    private readonly service;
    constructor(service: WorkplacesService);
    create(data: CreateWorkplace): Promise<Response<Workplace>>;
    getById(id: number): Promise<Response<WorkplaceDTO>>;
    get(request: Request, page: Page): Promise<PaginatedResponse<WorkplaceDTO>>;
}
