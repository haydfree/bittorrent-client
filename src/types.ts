export interface TorrentFile {
  path: string[];
  length: number;
}

export interface TorrentInfo {
  name: string;
  length?: number;
  files?: TorrentFile[]; 
  'piece length'?: number;
  pieces?: string;
  private?: boolean;
}

export interface Torrent {
  info: TorrentInfo;
  'creation date'?: number;
  'created by'?: string;
  comment?: string;
  announce?: string;
  'announce-list'?: string[][];
  'url-list'?: string[];
}

