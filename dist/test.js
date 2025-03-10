"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testValidatePath() {
    try {
        validatePath(null);
        console.error("validate path null failed");
    }
    finally {
    }
    try {
        validatePath(undefined);
        console.error("validate path undefined failed");
    }
    finally {
    }
    try {
        validatePath(123);
        console.error("validate path non-string failed");
    }
    finally {
    }
}
