export const torrentFile {
    path: string;
    length: number;
}

export const torrentInfo {
    name: string;
    length: number;
    files: torrentFile[];
    pieceLength: number;
    pieces: string;
    creationDate: number;
    createdBy: string;
    comment: string;
    announce: string;
    announceList: string[][];
    urlList: string[];
}

