import fs from "fs";
import crypto from "crypto";
import bencode from "bencode";

export function decode(torrent) {
   return bencode.decode(torrent, "utf8");
};

export function encode(torrent) {
    return bencode.encode(torrent);
}

export function size(torrent) {
    
};

export function infoHash(decodedTorrent) {
    const info = decodedTorrent.info;
    const encodedInfo = encode(info);
    crypto.createHash("sha1").update(encodedInfo).digest();
};
