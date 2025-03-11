const tracker = require("./tracker");
import parser from "parser";

const filePath = "./big-buck-bunny.torrent"
const torrent = parser.decode(filePath);

const encoded = parser.encode(torrent);
console.log(encoded);
