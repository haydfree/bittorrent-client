const url = require("url");
const dgram = require("dgram");
const buffer = require("buffer");
const crypto = require("crypto");

module.exports.getPeers = (torrent, callback) => {
    const socket = dgram.createSocket("udp4");
    const rawUrl = torrent.announce.toString("utf8");

    udpSend(rawUrl, buildConnReq(), socket);

    socket.on("message", (response) => {
        if (respType(response) === "connect") {
            const connResp = parseConnResp(response);
            const announceReq = buildAnnounceReq(connResp.connectionId, torrent);
            udpSend(rawUrl, announceReq, socket);
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

// format of messages got from BitTorrent UDP tracker protocol
function buildConnReq() {
    const buf = buffer.Buffer.alloc(16);
    
    buf.writeUInt32BE(0x417, 0);
    buf.writeUInt32BE(0x27101980, 4);
    buf.writeUInt32BE(0, 8);
    crypto.randomBytes(4).copy(buf, 12);
}

function parseConnResp() {
    const obj = {
        action: resp.read32UIntBE(0),
        transactionId: resp.read32UIntBE(4),
        connectionId: resp.slice(8)
    }

    return obj;
}

function buildAnnounceReq() {
     
}

function parseAnnounceResp() {

}

