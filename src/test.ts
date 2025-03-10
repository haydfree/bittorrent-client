import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import assert from "assert";

it("verifies an error is thrown with null, undefined, or non-string path", () => {
    expect(validatePath(null)).toThrow("path must be non-null");
    expect(validatePath(undefined)).toThrow("path must be defined");
    expect(validatePath(123)).toThrow("path must be string");
});


