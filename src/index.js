const tracker = require("./tracker");
const parser = require("./parser");

const filePath = "./big-buck-bunny.torrent"
const torrent = parser.open(filePath);

console.log(torrent);



