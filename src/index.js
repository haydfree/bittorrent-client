const fs = require("fs");
const bencode = require("thi.ng/bencode");
const tracker = require("./tracker");

const torrent = fs.readFileSync("./big-buck-bunny.torrent");
