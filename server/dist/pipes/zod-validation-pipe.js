"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class ZodValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        const result = this.schema.safeParse(value);
        if (result.success) {
            return result.data;
        }
        const issue = result.error.issues[0];
        throw new common_1.BadRequestException(issue
            ? `${issue.message}: '${issue.path.join(".")}'`
            : "Validation failed");
    }
}
exports.ZodValidationPipe = ZodValidationPipe;
//# sourceMappingURL=zod-validation-pipe.js.map