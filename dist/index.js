"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const bencode = __importStar(require("@thi.ng/bencode"));
const dgram = __importStar(require("dgram"));
const buffer_1 = require("buffer");
const url = __importStar(require("url"));
const torrentFilePath = './big-buck-bunny.torrent';
if (!fs.existsSync(torrentFilePath)) {
    console.error(`Torrent file not found: ${torrentFilePath}`);
    process.exit(1);
}
const torrentData = bencode.decode(fs.readFileSync(torrentFilePath), false);
if (!torrentData.announce || typeof torrentData.announce !== 'string') {
    console.error('Invalid or missing "announce" field in torrent data');
    process.exit(1);
}
const announceUrl = url.parse(torrentData.announce);
if (!announceUrl.hostname || !announceUrl.port) {
    console.error('Invalid announce URL');
    process.exit(1);
}
const socket = dgram.createSocket('udp4');
socket.bind(() => {
    const msg = buffer_1.Buffer.from('hello', 'utf8');
    socket.send(msg, 0, msg.length, parseInt(announceUrl.port, 10), announceUrl.hostname, (err) => {
        if (err) {
            console.error('Error sending message:', err);
        }
        else {
            console.log('Message sent successfully');
        }
        socket.close();
    });
});
socket.on('message', (msg) => {
    console.log(`Received message: ${msg.toString()}`);
});
socket.on('error', (err) => {
    console.error(`Socket error: ${err.stack}`);
    socket.close();
});
