const url = require("url");
const dgram = require("dgram");
const buffer = require("buffer");

module.exports.getPeers = (torrent, callback) => {
    const socket = dgram.createSocket("udp4");
    const rawUrl = torrent.announce.toString("utf8");

    udpSend(rawUrl, buildConnReq(), socket);

    socket.on("message", (response) => {
        if (respType(response) === "connect") {
            const connResp = parseConnResp(response);
            udpSend(rawUrl, buildAnnounceReq(connResp.connectionId), socket);
        } else {
            const announceResp = parseAnnounceResp(response);
            callback(announceResp.peers);
        }
    });
};

function udpSend(rawUrl, message, socket, callback=()=>{}) {
    const urlObj = url.parse(rawUrl);
    socket.send(message, 0, message.length, url.port, url.host, callback);
}

function respType(response) {

}

function buildConnReq() {

}

function parseConnResp() {

}

function buildAnnounceReq() {

}

function parseAnnounceResp() {

}

