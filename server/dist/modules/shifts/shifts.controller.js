"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsController = void 0;
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../../pipes/zod-validation-pipe");
const pagination_1 = require("../shared/pagination");
const shifts_schemas_1 = require("./shifts.schemas");
const shifts_service_1 = require("./shifts.service");
let ShiftsController = class ShiftsController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        return { data: (0, pagination_1.omitShard)(await this.service.create(data)) };
    }
    async getById(id) {
        const data = await this.service.getById(id);
        if (!data) {
            throw new Error(`ID ${id} not found.`);
        }
        return { data: (0, pagination_1.omitShard)(data) };
    }
    async get(request, page) {
        const { data, nextPage } = await this.service.get({ page });
        return {
            data: data.map(pagination_1.omitShard),
            links: { next: (0, pagination_1.nextLink)({ nextPage, request }) },
        };
    }
    async claim(id, workerId) {
        return { data: (0, pagination_1.omitShard)(await this.service.claim(id, workerId)) };
    }
    async cancel(id) {
        const data = await this.service.getById(id);
        if (!data) {
            throw new Error(`ID ${id} not found.`);
        }
        if (!data.workerId) {
            throw new Error(`Shift ${id} is not claimed.`);
        }
        return { data: (0, pagination_1.omitShard)(await this.service.cancel(id)) };
    }
};
exports.ShiftsController = ShiftsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(shifts_schemas_1.createShiftSchema)),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShiftsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShiftsController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, pagination_1.PaginationPage)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShiftsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)("/:id/claim"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("workerId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ShiftsController.prototype, "claim", null);
__decorate([
    (0, common_1.Post)("/:id/cancel"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShiftsController.prototype, "cancel", null);
exports.ShiftsController = ShiftsController = __decorate([
    (0, common_1.Controller)("shifts"),
    __metadata("design:paramtypes", [shifts_service_1.ShiftsService])
], ShiftsController);
//# sourceMappingURL=shifts.controller.js.map