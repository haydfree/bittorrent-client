const bencode = require("@thi.ng/bencode");
const fs = require("fs");
const url = require("url");

const path = "./big-buck-bunny.torrent";
const torrentBytes = fs.readFileSync(path);
const torrentDecoded = bencode.decode(torrentBytes, false);
const announceStr = torrentDecoded.announce.toString("utf-8");
const urlObj = url.parse(announceStr);

const host = urlObj.host;
const port = urlObj.port;



