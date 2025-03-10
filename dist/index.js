"use strict";
const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const torrent = bencode.decode(fs.readFileSync("./puppy.torrent"), false);
console.log(torrent.announce.toString("utf-8"));
