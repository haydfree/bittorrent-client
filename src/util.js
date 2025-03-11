const crypto = require("crypto");
const buffer = require("buffer");

let id = null;

module.exports.genId = () => {
    if (!id) {
        id = crypto.randomBytes(20);
        buffer.Buffer.from("-AT0001-").copy(id, 0);
    }

    return id;
};
