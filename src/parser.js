function decodeString(buffer, offset) {
  const colonPos = buffer.indexOf(':', offset);
  const strLen = parseInt(buffer.toString('utf8', offset, colonPos), 10);
  const start = colonPos + 1;
  const end = start + strLen;
  const value = buffer.toString('utf8', start, end);
  return { value, offset: end };
}

function decodeInteger(buffer, offset) {
  const endPos = buffer.indexOf('e', offset);
  const number = parseInt(buffer.toString('utf8', offset + 1, endPos), 10);
  return { value: number, offset: endPos + 1 };
}

function decodeList(buffer, offset) {
  let result = [];
  offset++; // Skip 'l'
  while (buffer[offset] !== 101) { // 'e'
    const decoded = decodeValue(buffer, offset);
    result.push(decoded.value);
    offset = decoded.offset;
  }
  return { value: result, offset: offset + 1 };
}

function decodeDictionary(buffer, offset) {
  let result = {};
  offset++; // Skip 'd'
  while (buffer[offset] !== 101) { // 'e'
    const keyDecoded = decodeString(buffer, offset);
    const valueDecoded = decodeValue(buffer, keyDecoded.offset);
    result[keyDecoded.value] = valueDecoded.value;
    offset = valueDecoded.offset;
  }
  return { value: result, offset: offset + 1 };
}

function decodeValue(buffer, offset) {
  const firstChar = buffer[offset];
  if (firstChar === 105) { // 'i'
    return decodeInteger(buffer, offset);
  } else if (firstChar === 108) { // 'l'
    return decodeList(buffer, offset);
  } else if (firstChar === 100) { // 'd'
    return decodeDictionary(buffer, offset);
  } else if (firstChar >= 48 && firstChar <= 57) { // '0' - '9'
    return decodeString(buffer, offset);
  } else {
    throw new Error(`Invalid Bencode data at offset ${offset}`);
  }
}

function bencodeDecode(buffer) {
  const result = decodeValue(buffer, 0);
  if (result.offset !== buffer.length) {
    throw new Error('Invalid Bencode data: Extra data after parsing.');
  }
  return result.value;
}

module.exports = {
  decodeString,
  decodeInteger,
  decodeList,
  decodeDictionary,
  decodeValue,
  bencodeDecode
};

// Example usage:
// const fs = require('fs');
// const buffer = fs.readFileSync('path_to_torrent_file.torrent');
// const decodedData = bencodeDecode(buffer);
// console.log(decodedData);

