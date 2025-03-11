const fs = require("fs");
const crypto = require("crypto");

import bencode from "bencode";

module.exports.decode = (path) => {
    return bencode.decode(fs.readFileSync(path));
};

module.exports.encode = (torrent) => {
    return bencode.encode(torrent);
}

module.exports.size = (torrent) => {

};

module.exports.infoHash = (torrent) => {

};
