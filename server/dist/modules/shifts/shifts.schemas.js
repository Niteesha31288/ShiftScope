"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShiftSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../shared/constants");
exports.createShiftSchema = zod_1.z.object({
    startAt: zod_1.z.string(),
    endAt: zod_1.z.string(),
    workerId: zod_1.z.string().optional(),
    workplaceId: zod_1.z.number(),
    shard: zod_1.z.number().int().min(0).max(constants_1.MAX_SHARDS).optional(),
});
//# sourceMappingURL=shifts.schemas.js.map