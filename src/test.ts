import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";

import {Torrent, TorrentInfo, TorrentFile} from "./types";

function verifyAllPropsValidTorrent(torrent: Torrent) {
    for (const key in torrent) {
        if (!Object.prototype.hasOwnProperty.call(torrent, key))
        const value = torrent[key];
        assert(value !== null && value !== undefined);
    }
}

function verifyAllPropsTypesMatchTorrent(torrent: Torrent) {
}
