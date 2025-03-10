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

