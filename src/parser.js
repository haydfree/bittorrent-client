const fs = require("fs");
const bencode = require("@thi.ng/bencode");

module.exports.open = (path) => {
    return bencode.decode(fs.readFileSync(path), false);
};

module.exports.size = (torrent) => {

};

module.exports.infoHash = (torrent) => {

};
