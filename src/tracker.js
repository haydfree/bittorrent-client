const bencode = require("@thi.ng/bencode");
const fs = require("fs");
const url = require("url");
const dgram = require("dgram");
const buffer = require("buffer");

module.exports.Func = (torrent, callback) => {

    const rawUrl = torrent.announce.toString("utf8");

    const socket = dgram.createSocket("udp4");
};

function udpSend() {

}

function buildConnReq() {

}

function parseConnResp() {

}

function buildAnnounceReq() {

}

function parseAnnounceReq() {

}
