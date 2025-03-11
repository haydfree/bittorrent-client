const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const crypto = require("crypto");

module.exports.decode = (path) => {
    return bencode.decode(fs.readFileSync(path), false);
};

module.exports.encode = (torrent) => {
    return bencode.encode(torrent, false);
}

module.exports.size = (torrent) => {

};

module.exports.infoHash = (torrent) => {

};
