import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';

function validatePath() {

}

const torrentFilePath = './big-buck-bunny.torrent';
console.log(fs.readFileSync(torrentFilePath));

module.exports = validatePath;

