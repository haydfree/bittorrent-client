import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";
import {validatePath} from "./index";

function testValidatePath() {
    try {
        //@ts-ignore
        validatePath(null);
        console.error("validate path null failed");
    } catch {}
    try {
        //@ts-ignore
        validatePath(undefined);
        console.error("validate path undefined failed");
    } catch {}
    try {
        //@ts-ignore
        validatePath(123);
        console.error("validate path non-string failed");
    } catch {}
}

