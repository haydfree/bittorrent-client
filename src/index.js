const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const tracker = require("./tracker");

const filePath = "./big-buck-bunny.torrent"
const torrent = bencode.decode(fs.readFileSync(filePath), false);

tracker.print(torrent);
