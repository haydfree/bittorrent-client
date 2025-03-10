"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function verifyAllPropsValidTorrent(torrent) {
    for (const key in torrent) {
        if (Object.prototype.hasOwnProperty.call(torrent, key)) {
            const value = torrent[key];
            (0, assert_1.default)(value !== null && value !== undefined);
        }
    }
}
function verifyAllPropsTypesMatchTorrent(torrent) {
}
