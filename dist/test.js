"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testValidatePath() {
    try {
        validatePath(null);
        console.error("validate path null failed");
    }
    catch (_a) { }
    try {
        validatePath(undefined);
        console.error("validate path undefined failed");
    }
    catch (_b) { }
    try {
        validatePath(123);
        console.error("validate path non-string failed");
    }
    catch (_c) { }
}
