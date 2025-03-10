const bencode = require("@thi.ng/bencode");
const fs = require("fs");

const path = "./big-buck-bunny.torrent";
const torrentBytes = fs.readFileSync(path);
const torrentDecoded = bencode.decode(torrentBytes, false);
const announceStr = torrentDecoded.announce.toString("utf-8");

