import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import * as assert from "assert";
import Torrent, TorrentInfo, TorrentFile from "types.ts";

function verifyAllPropsPresentTorrent(torrent: Torrent) {
    if (!torrent.info || !torrent.creationDate || !torrent.createdBy || !torrent.comment || !torrent.announce || !torrent.announceList || !torrent.urlList) {
        return false;
    } else {
        return true;
    }
}

function verifyAllPropsTypesMatchTorrent(torrent: Torrent) {
    if (typeof 
}
