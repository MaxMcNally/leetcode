const encoded = {}
let encodedCount = 0
let baseURL = "http://tinyurl.com/"
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    encoded[encodedCount] = longUrl
    encodedCount++
    return baseURL + (encodedCount - 1).toString()
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let key = shortUrl.split("/").pop()
    return encoded[key]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */