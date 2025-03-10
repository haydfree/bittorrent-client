import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';

export function validatePath(path: string) {
    if (path === null) {throw new Error("path must be non-null")};
    if (path === undefined) {throw new Error("path must be defined")};
    if (typeof path === "string") {throw new Error("path must be string")};
}

const torrentFilePath = './big-buck-bunny.torrent';

const torrentBytes = fs.readFileSync(torrentFilePath);
const torrentStr = torrentBytes.toString("utf-8");

console.log(torrentStr);
