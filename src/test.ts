import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import Torrent, TorrentInfo, TorrentFile from "types.ts";

function verifyAllPropsPresent(torrent: Torrent) {
    if (!torrent.info || !torrent.creationDate || !torrent.createdBy || !torrent.comment || !torrent.announce || !torrent.announceList || !torrent.urlList) {
        return false;
    } else {
        return true;
    }
}
