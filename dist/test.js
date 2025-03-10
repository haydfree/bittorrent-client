"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const bencode = __importStar(require("@thi.ng/bencode"));
const assert_1 = __importDefault(require("assert"));
function verifyAllPropsValidTorrentFile(torrentFile) {
    (0, assert_1.default)(torrentFile.path !== null && torrentFile.path !== undefined);
    (0, assert_1.default)(torrentFile.length !== null && torrentFile.length !== undefined);
}
function verifyAllPropsValidTorrentInfo(torrentInfo) {
    (0, assert_1.default)(torrentInfo.name !== null && torrentInfo.name !== undefined);
    (0, assert_1.default)(torrentInfo.length !== null && torrentInfo.length !== undefined);
    (0, assert_1.default)(torrentInfo.files !== null && torrentInfo.files !== undefined);
    (0, assert_1.default)(torrentInfo.pieceLength !== null && torrentInfo.pieceLength !== undefined);
    (0, assert_1.default)(torrentInfo.pieces !== null && torrentInfo.pieces !== undefined);
    (0, assert_1.default)(torrentInfo.private !== null && torrentInfo.private !== undefined);
}
function verifyAllPropsValidTorrent(torrent) {
    (0, assert_1.default)(torrent.info !== null && torrent.info !== undefined);
    (0, assert_1.default)(torrent.creationDate !== null && torrent.creationDate !== undefined);
    (0, assert_1.default)(torrent.createdBy !== null && torrent.createdBy !== undefined);
    (0, assert_1.default)(torrent.comment !== null && torrent.comment !== undefined);
    (0, assert_1.default)(torrent.announce !== null && torrent.announce !== undefined);
    (0, assert_1.default)(torrent.announceList !== null && torrent.announceList !== undefined);
    (0, assert_1.default)(torrent.urlList !== null && torrent.urlList !== undefined);
}
function verifyAllPropsTypesMatchTorrentFile(torrentFile) {
    (0, assert_1.default)(Array.isArray(torrentFile.path) && torrentFile.path.every(item => typeof item === "string"));
    (0, assert_1.default)(typeof torrentFile.length === "number");
}
function verifyAllPropsTypesMatchTorrentInfo(torrentInfo) {
    (0, assert_1.default)(typeof torrentInfo.name === "string");
    (0, assert_1.default)(typeof torrentInfo.length === "number");
    (0, assert_1.default)(Array.isArray(torrentInfo.files) && torrentInfo.files.every(item => verifyAllPropsTypesMatchTorrentFile(item)));
    (0, assert_1.default)(typeof torrentInfo.pieceLength === "number");
    (0, assert_1.default)(typeof torrentInfo.pieces === "string");
    (0, assert_1.default)(typeof torrentInfo.private === "boolean");
}
function verifyAllPropsTypesMatchTorrent(torrent) {
    (0, assert_1.default)(verifyAllPropsTypesMatchTorrentInfo(torrent.info));
    (0, assert_1.default)(typeof torrent.creationDate === "number");
    (0, assert_1.default)(typeof torrent.createdBy === "string");
    (0, assert_1.default)(typeof torrent.comment === "string");
    (0, assert_1.default)(typeof torrent.announce === "string");
    (0, assert_1.default)(Array.isArray(torrent.announceList) && torrent.announceList.every(item => Array.isArray(item) && item.every(subItem => typeof subItem === "string")));
    (0, assert_1.default)(Array.isArray(torrent.urlList) && torrent.urlList.every(item => typeof item === "string"));
}
const filePath = "./big-buck-bunny.torrent";
const torrentBytes = fs.readFileSync(filePath);
console.log(bencode.decode(torrentBytes, false));
//verifyAllPropsValidTorrentFile();
//verifyAllPropsValidTorrentInfo();
//verifyAllPropsValidTorrent();
//verifyAllPropsTypesMatchTorrentFile();
//verifyAllPropsTypesMatchTorrentInfo();
//verifyAllPropsTypesMatchTorrent();
