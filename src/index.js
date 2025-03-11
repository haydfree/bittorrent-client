const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const tracker = require("./tracker");
const parser = require("./parser");

const filePath = "./big-buck-bunny.torrent"
const buffer = fs.readFileSync(filePath);

const decodedData = bencodeDecode(buffer);
console.log(decodedData);


