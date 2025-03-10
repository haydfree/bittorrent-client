export const torrentFile = {
    path: string,
    size: number
}

export const torrentInfo = {
    name: string,
    size: number,
    files: torrentFile[],
    pieces: string,
    pieceLength: number,
    private: boolean,
    creationDate: number,
    createdBy: string,
    comment: string,
    announce: string
}

