const tracker = require("./tracker");
const parser = require("./parser.mjs");

const filePath = "./big-buck-bunny.torrent"
const decodedTorrent = parser.decode(filePath);
const encodedTorrent = parser.encode(decodedTorrent);

console.log(decodedTorrent["url-list"].toString("utf8"));
console.log(encodedTorrent);
