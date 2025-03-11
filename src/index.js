const tracker = require("./tracker");
const parser = require("./parser");

const filePath = "./big-buck-bunny.torrent"
const buffer = fs.readFileSync(filePath);
const torrent = parser.open(filePath);

console.log(torrent);



