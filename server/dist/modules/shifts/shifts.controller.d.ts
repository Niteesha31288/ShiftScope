import { Request } from "express";
import { type Page, PaginatedResponse, type Response } from "../shared/shared.types";
import { type CreateShift, ShiftDTO } from "./shifts.schemas";
import { ShiftsService } from "./shifts.service";
export declare class ShiftsController {
    private readonly service;
    constructor(service: ShiftsService);
    create(data: CreateShift): Promise<Response<ShiftDTO>>;
    getById(id: number): Promise<Response<ShiftDTO>>;
    get(request: Request, page: Page): Promise<PaginatedResponse<ShiftDTO>>;
    claim(id: number, workerId: number): Promise<Response<ShiftDTO>>;
    cancel(id: number): Promise<Response<ShiftDTO>>;
}
