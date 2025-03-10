const fs = require("fs");
const bencode = require("@thi.ng/bencode");

const torrent = bencode.decode(fs.readFileSync("./puppy.torrent"));
console.log(torrent);
