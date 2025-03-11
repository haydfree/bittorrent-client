const tracker = require("./tracker");
const parser = require("./parser.mjs");
const fs = require("fs");

const filePath = "./big-buck-bunny.torrent"
const torrent = fs.readFileSync(filePath);
const decodedTorrent = parser.decode(torrent);
const encodedTorrent = parser.encode(decodedTorrent);

const keys = Object.keys(torrent);
keys.forEach(key => console.log(key));
