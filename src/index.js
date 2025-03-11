const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const tracker = require("./tracker");
const parser = require("./parser");

const filePath = "./big-buck-bunny.torrent"
const buffer = fs.readFileSync(filePath);

const decodedData = parser.bencodeDecode(buffer);
const keys = Object.keys(decodedData);

keys.forEach(key => console.log(key));


