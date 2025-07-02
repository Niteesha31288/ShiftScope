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
exports.WorkplacesController = void 0;
const common_1 = require("@nestjs/common");
const pagination_1 = require("../shared/pagination");
const workplaces_service_1 = require("./workplaces.service");
let WorkplacesController = class WorkplacesController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        return { data: await this.service.create(data) };
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
};
exports.WorkplacesController = WorkplacesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkplacesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkplacesController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, pagination_1.PaginationPage)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WorkplacesController.prototype, "get", null);
exports.WorkplacesController = WorkplacesController = __decorate([
    (0, common_1.Controller)("workplaces"),
    __metadata("design:paramtypes", [workplaces_service_1.WorkplacesService])
], WorkplacesController);
//# sourceMappingURL=workplaces.controller.js.map