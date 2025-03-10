export interface TorrentFile {
    path: string;
    length: number;
}

export interface TorrentInfo {
    name: string;
    length: number;
    files: TorrentFile[]; 
    pieceLength: number;
    pieces: string;
    private: boolean;
}

export const torrentInfo {
    name: string,
    length: number,

    creationDate: number;
    createdBy: string;
    comment: string;
    announce: string;
    announceList: string[][];
    urlList: string[];
}

