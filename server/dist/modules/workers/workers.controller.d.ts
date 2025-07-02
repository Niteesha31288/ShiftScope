import { Request } from "express";
import { type Page, PaginatedResponse, type Response } from "../shared/shared.types";
import { ShiftDTO } from "../shifts/shifts.schemas";
import { type CreateWorker, WorkerDTO } from "./workers.schemas";
import { WorkersService } from "./workers.service";
export declare class WorkersController {
    private readonly service;
    constructor(service: WorkersService);
    create(data: CreateWorker): Promise<Response<WorkerDTO>>;
    getClaims(request: Request, id: number, page: Page): Promise<PaginatedResponse<ShiftDTO>>;
    getById(id: number): Promise<Response<WorkerDTO>>;
    get(request: Request, page: Page): Promise<PaginatedResponse<WorkerDTO>>;
}
