const tracker = require("./tracker");
const parser = require("./parser");

const filePath = "./big-buck-bunny.torrent"
const torrent = parser.decode(filePath);

console.log(torrent);

const encoded = parser.encode(torrent);

console.log(encoded);
