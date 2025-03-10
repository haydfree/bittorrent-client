"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.torrentInfo = exports.torrentFile = void 0;
exports.torrentFile = {
    path: string,
    size: number
};
exports.torrentInfo = {
    name: string,
    size: number,
    files: exports.torrentFile[],
    pieces: string,
    pieceLength: number,
    private: boolean,
    creationDate: number,
    createdBy: string,
    comment: string,
    announce: string
};
