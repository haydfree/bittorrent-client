import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';

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
if (!announceUrl || !announceUrl.hostname || !announceUrl.port) {
    console.error('Invalid announce URL');
    process.exit(1);
}

const socket = dgram.createSocket('udp4');

socket.bind(() => {
    const msg: Buffer = Buffer.from('hello', 'utf8');

    socket.send(msg, 0, msg.length, parseInt(port, 10), hostname, (err) => {
        if (err) {
            console.error('Error sending message:', err);
        } else {
            console.log('Message sent successfully');
        }
        socket.close();
    });
});

socket.on('message', (msg: Buffer) => {
    console.log(`Received message: ${msg.toString()}`);
});

socket.on('error', (err) => {
    console.error(`Socket error: ${err.stack}`);
    socket.close();
});

