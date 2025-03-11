const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const tracker = require("./tracker");

const filePath = "./big-buck-bunny.torrent"
const buffer = fs.readFileSync(filePath);

// Example usage:
// const fs = require('fs');
// const buffer = fs.readFileSync('path_to_torrent_file.torrent');
const decodedData = bencodeDecode(buffer);
console.log(decodedData);


