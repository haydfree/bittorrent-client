import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";

function testValidatePath() {
    try {
        validatePath(null);
        console.error("validate path null failed");
    }
    try {
        validatePath(undefined);
        console.error("validate path undefined failed");
    }
    try {
        validatePath(123);
        console.error("validate path undefined failed");
    }
}

