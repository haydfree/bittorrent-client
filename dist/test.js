"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
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
