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

export function infoHash(torrent) {
    const info = torrent.info;
    const encodedInfo = encode(info);
    console.log(encodedInfo);
    crypto.createHash("sha1").update(encodedInfo).digest();
};
