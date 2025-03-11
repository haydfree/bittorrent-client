const bencode = require("@thi.ng/bencode");
const fs = require("fs");
const url = require("url");
const dgram = require("dgram");
const buffer = require("buffer");

module.exports.Func = (torrent, callback) => {
    const socket = dgram.createSocket("udp4");
    const rawUrl = torrent.announce.toString("utf8");

    udpSend(rawUrl, buildConnReq(), socket);

    socket.on("message", (response) => {
        if (
        buildConnReq();

    });
};

function respType(response) {

}

function udpSend(rawUrl, message, socket, callback=()=>{}) {
    const urlObj = url.parse(rawUrl);
    socket.send(message, 0, message.length, url.port, url.host, callback);
}

function buildConnReq() {

}

function parseConnResp() {

}

function buildAnnounceReq() {

}

function parseAnnounceReq() {

}

