import fs from "fs";
import crypto from "crypto";
import bencode from "bencode";

export function decode(path) {
    return bencode.decode(fs.readFileSync(path));
};

export function encode(torrent) {
    return bencode.encode(torrent);
}

module.exports.size = (torrent) => {

};

module.exports.infoHash = (torrent) => {

};
