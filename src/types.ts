export const torrentFile {
    path: string;
    length: number;
}

export const torrentInfo {
    name: string;
    length: number;
    files: torrentFile[];
    pieces: string;
    pieceLength: number;
    creationDate: number;
    createdBy: string;
    comment: string;
    announce: string;
    announceList: string[][];
    urlList: string[];
}

