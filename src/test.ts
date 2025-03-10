import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";

import {Torrent, TorrentInfo, TorrentFile} from "./types";

function verifyAllPropsValidTorrent(torrent: Torrent) {
    assert(torrent.info!== null && torrent.info !== undefined);
    assert(torrent.creationDate !== null && torrent.creationDate !== undefined);
    assert(torrent.createdBy !== null && torrent.createdBy !== undefined);
    assert(torrent.comment !== null && torrent.comment !== undefined);
    assert(torrent.announce !== null && torrent.announce !== undefined);
    assert(torrent.announceList !== null && torrent.announceList !== undefined);
    assert(torrent.urlList !== null && torrent.urlList !== undefined);
}

function verifyAllPropsTypesMatchTorrent(torrent: Torrent) {
    assert(typeof torrent.info === "TorrentInfo");
    assert(typeof torrent.creationDate === "number");
    assert(typeof torrent.createdBy === "string");
    assert(typeof torrent.comment === "string");
    assert(typeof torrent.announce === "string");
    assert(Array.isArray(torrent.announceList) && torrent.announceList.every(item => Array.isArray(item) && item.every(subItem => typeof subItem === "string")));
    assert(Array.isArray(torrent.urlList) && torrent.urlList.every(item => typeof item === "string"));
}
