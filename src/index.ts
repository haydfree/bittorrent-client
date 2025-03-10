const fs = require("fs");
const bencode = require("@thi.ng/bencode");

const torrent = fs.readFileSync("../puppy.torrent");
