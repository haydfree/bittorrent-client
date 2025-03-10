"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function testValidatePath() {
    try {
        //@ts-ignore
        (0, index_1.validatePath)(null);
        console.error("validate path null failed");
    }
    catch (_a) { }
    try {
        //@ts-ignore
        (0, index_1.validatePath)(undefined);
        console.error("validate path undefined failed");
    }
    catch (_b) { }
    try {
        //@ts-ignore
        (0, index_1.validatePath)(123);
        console.error("validate path non-string failed");
    }
    catch (_c) { }
}
