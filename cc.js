const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');


console.log(decoder.end(Buffer.from(["&lt;"]))); 
