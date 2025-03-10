const fs = require("fs");
const bencode = require("@thi.ng/bencode");
const dgram = require("dgram");
const buffer = require("buffer");
const url = require("url");

const torrent = bencode.decode(fs.readFileSync("./puppy.torrent"), false);
const torrentStr = torrent.announce.toString("utf-8");

const urlStr = url.parse(torrentStr);
const socket = dgram.createSocket("udp4");
const msg: buffer.Buffer = buffer.Buffer.from("hello", "utf8");

socket.send(msg, 0, msg.length, urlStr.port, urlStr.host, () => {});
socket.on("message", msg => {
    console.log(`message is: ${msg}`);
});
