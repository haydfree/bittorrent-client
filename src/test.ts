import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import * as assert from "assert";

import {Torrent, TorrentInfo, TorrentFile} from "./src/types.ts";

function verifyAllPropsValidTorrent(torrent: Torrent) {
    for (const key in torrent) {
        const value = torrent[key];
        assert(value !== null && value !== undefined);
    }
}

function verifyAllPropsTypesMatchTorrent(torrent: Torrent) {
}
