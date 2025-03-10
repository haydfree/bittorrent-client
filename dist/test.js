"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
function testValidatePath() {
    try {
        (0, index_1.default)(null);
        console.error("validate path null failed");
    }
    catch (_a) { }
    try {
        (0, index_1.default)(undefined);
        console.error("validate path undefined failed");
    }
    catch (_b) { }
    try {
        (0, index_1.default)(123);
        console.error("validate path non-string failed");
    }
    catch (_c) { }
}
