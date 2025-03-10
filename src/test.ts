import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import * from jest;

function testFilePath(path: string) {
    assert(path !== undefined && path !== null && typeof path === "string");
}

