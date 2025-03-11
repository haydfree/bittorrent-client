const tracker = require("./tracker");
const parser = require("./parser.mjs");

const filePath = "./big-buck-bunny.torrent"
const torrent = fs.readFileSync(filePath);
const decodedTorrent = parser.decode(torrent);
const encodedTorrent = parser.encode(decodedTorrent);

console.log(decodedTorrent);
console.log(encodedTorrent);

console.log(parser.decode(encodedTorrent));
