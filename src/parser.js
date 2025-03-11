const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const crypto = require("crypto");

module.exports.open = (path) => {
    return bencode.decode(fs.readFileSync(path), false);
};

module.exports.size = (torrent) => {

};

module.exports.infoHash = (torrent) => {
    const info = bencode.encode(torrent.info, false);
    return crypto.createHash("sha1").update(info).digest();
};
