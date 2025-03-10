import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";

import {Torrent, TorrentInfo, TorrentFile} from "./types";

function verifyAllPropsValidTorrentFile(torrentFile: TorrentFile) {
    assert(torrentFile.path !== null && torrentFile.path !== undefined); 
    assert(torrentFile.size !== null && torrentFile.size !== undefined); 
}

function verifyAllPropsValidTorrent(torrent: Torrent) {
    assert(torrent.name !== null && torrent.name !== undefined); 
    assert(torrent.size !== null && torrent.size !== undefined); 
    assert(torrent.files !== null && torrent.files !== undefined); 
    assert(torrent.pieceLength !== null && torrent.pieceLength !== undefined); 
    assert(torrent.pieces !== null && torrent.pieces !== undefined); 
    assert(torrent.private !== null && torrent.private !== undefined); 
    assert(torrent.info !== null && torrent.info !== undefined);
    assert(torrent.creationDate !== null && torrent.creationDate !== undefined);
    assert(torrent.createdBy !== null && torrent.createdBy !== undefined);
    assert(torrent.comment !== null && torrent.comment !== undefined);
    assert(torrent.announce !== null && torrent.announce !== undefined);
    assert(torrent.announceList !== null && torrent.announceList !== undefined);
    assert(torrent.urlList !== null && torrent.urlList !== undefined);
}

function verifyAllPropsTypesMatchTorrentFile(torrentFile: TorrentFile) {
    assert(Array.isArray(torrentFile.path) && torrentFile.path.every(item => typeof item === "string"));
    assert(typeof torrentFile.length === "number");
}

function verifyAllPropsTypesMatchTorrent(torrent: Torrent) {
    assert(typeof torrent.name === "string");
    assert(typeof torrent.size === "number");
    assert(Array.isArray(torrent.files) && torrent.files.every(item => verifyAllPropsTypesMatchTorrentFile(item)));
    assert(typeof torrent.pieceLength === "number");
    assert(typeof torrent.pieces === "string");
    assert(typeof torrent.private === "boolean");
    assert(verifyAllPropsTypesMatchTorrentInfo(torrent.info));
    assert(typeof torrent.creationDate === "number");
    assert(typeof torrent.createdBy === "string");
    assert(typeof torrent.comment === "string");
    assert(typeof torrent.announce === "string");
    assert(Array.isArray(torrent.announceList) && torrent.announceList.every(item => Array.isArray(item) && item.every(subItem => typeof subItem === "string")));
    assert(Array.isArray(torrent.urlList) && torrent.urlList.every(item => typeof item === "string"));
}

const filePath = "./big-buck-bunny.torrent"
const torrentBytes = fs.readFileSync(filePath);


console.log(bencode.decode(torrentBytes, false).announce.toString("utf-8"));

//verifyAllPropsValidTorrentFile();
//verifyAllPropsValidTorrentInfo();
//verifyAllPropsValidTorrent();
//verifyAllPropsTypesMatchTorrentFile();
//verifyAllPropsTypesMatchTorrentInfo();
//verifyAllPropsTypesMatchTorrent();


