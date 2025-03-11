import fs from "fs";
import crypto from "crypto";
import bencode from "bencode";

export function decode(torrent) {
   return bencode.decode(fs.readFileSync(torrent), "utf8");
};

export function encode(torrent) {
    return bencode.encode(torrent);
}

export function size(torrent) {
    
};

export function infoHash(torrent) {

};
