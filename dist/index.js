"use strict";
const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const torrent = fs.readFileSync("../puppy.torrent");
console.log(torrent.toString("utf-8"));
