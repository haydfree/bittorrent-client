import fs from "fs";
import crypto from "crypto";
import bencode from "bencode";

export function decode(buf) {
   return bencode.decode(fs.readFileSync(buf), "utf8");
};

export function encode(torrent) {
    return bencode.encode(torrent);
}

export function size(torrent) {
    
};

export function infoHash(torrent) {

};
