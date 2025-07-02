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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pagination_1 = require("../shared/pagination");
let ShiftsService = class ShiftsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.shift.create({
            data: data,
        });
    }
    async getById(id) {
        return await this.prisma.shift.findUnique({ where: { id } });
    }
    async get(parameters) {
        const { page } = parameters;
        const shifts = await this.prisma.shift.findMany({
            ...(0, pagination_1.queryParameters)({ page }),
            orderBy: { id: "asc" },
        });
        const nextPage = await (0, pagination_1.getNextPage)({
            currentPage: page,
            collection: this.prisma.shift,
        });
        return { data: shifts, nextPage };
    }
    async claim(id, workerId) {
        return await this.prisma.shift.update({
            where: {
                id,
                workerId: null,
            },
            data: { workerId, cancelledAt: null },
        });
    }
    async cancel(id) {
        return await this.prisma.shift.update({
            where: {
                id,
                workerId: { not: null },
            },
            data: {
                cancelledAt: new Date(),
                workerId: null,
            },
        });
    }
};
exports.ShiftsService = ShiftsService;
exports.ShiftsService = ShiftsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShiftsService);
//# sourceMappingURL=shifts.service.js.map