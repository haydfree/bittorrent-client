import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';

const torrentFilePath = './big-buck-bunny.torrent';
const torrentBytes = fs.readFileSync(torrentFilePath);
const torrentDecoded = bencode.decode(torrentBytes, false);
const announceStr = torrentDecoded.announce.toString("utf-8");

const urlStr = url.parse(announceStr);
const socket = dgram.createSocket("udp4");

console.log(urlStr);

