import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';

// Verify that the torrent file exists
const torrentFilePath = './big-buck-bunny.torrent';
if (!fs.existsSync(torrentFilePath)) {
  console.error(`Torrent file not found: ${torrentFilePath}`);
  process.exit(1);
}

// Decode the torrent file
const torrentData = bencode.decode(fs.readFileSync(torrentFilePath), false);

// Ensure 'announce' field exists and is a valid URL
if (!torrentData.announce || typeof torrentData.announce !== 'string') {
  console.error('Invalid or missing "announce" field in torrent data');
  process.exit(1);
}

// Parse the announce URL
const announceUrl = url.parse(torrentData.announce);
if (!announceUrl.hostname || !announceUrl.port) {
  console.error('Invalid announce URL');
  process.exit(1);
}

// Create a UDP socket
const socket = dgram.createSocket('udp4');

// Bind the socket to a port before sending
socket.bind(() => {
  // Prepare the message
  const msg: Buffer = Buffer.from('hello', 'utf8');

  // Send the message to the announce URL's host and port
  socket.send(msg, 0, msg.length, parseInt(announceUrl.port, 10), announceUrl.hostname, (err) => {
    if (err) {
      console.error('Error sending message:', err);
    } else {
      console.log('Message sent successfully');
    }
    // Close the socket after sending
    socket.close();
  });
});

// Handle incoming messages
socket.on('message', (msg: Buffer) => {
  console.log(`Received message: ${msg.toString()}`);
});

// Handle socket errors
socket.on('error', (err) => {
  console.error(`Socket error: ${err.stack}`);
  socket.close();
});

