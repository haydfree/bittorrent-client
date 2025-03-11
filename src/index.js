const tracker = require("./tracker");
const parser = require("./parser.mjs");

const filePath = "./big-buck-bunny.torrent"
const torrent = parser.decode(filePath);

const encoded = parser.encode(torrent);
console.log(encoded);
