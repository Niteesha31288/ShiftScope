"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorkplaceSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../shared/constants");
exports.createWorkplaceSchema = zod_1.z.object({
    name: zod_1.z.string(),
    shard: zod_1.z.number().int().min(0).max(constants_1.MAX_SHARDS).optional(),
});
//# sourceMappingURL=workplaces.schemas.js.map