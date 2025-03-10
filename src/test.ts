import * as fs from 'fs';
import * as bencode from '@thi.ng/bencode';
import * as dgram from 'dgram';
import { Buffer } from 'buffer';
import * as url from 'url';
import * from jest;

it("verifies a null path throws an error", () => {
    expect(validatePath(null)).toThrow();
});
