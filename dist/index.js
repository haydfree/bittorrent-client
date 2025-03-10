"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePath = validatePath;
-ignore;
function validatePath(path) {
    if (path === null) {
        throw new Error("path must be non-null");
    }
    ;
    if (path === undefined) {
        throw new Error("path must be defined");
    }
    ;
    if (typeof path === "string") {
        throw new Error("path must be string");
    }
    ;
}
const torrentFilePath = './big-buck-bunny.torrent';
//console.log(fs.readFileSync(torrentFilePath));
