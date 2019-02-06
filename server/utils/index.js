const crypto = require('crypto');

exports.createHash = (text = Math.random(1000 * 1000 * 1000)) => {
    return crypto.createHmac('sha1', process.env.SECRET_KEY).update(text).digest('hex');
}