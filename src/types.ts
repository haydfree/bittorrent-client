interface TorrentFile {
  path: string[];
  length: number;
}

interface TorrentInfo {
  name: string;
  length: number;
  files: TorrentFile[];
}

interface Torrent {
  info: TorrentInfo;
}
