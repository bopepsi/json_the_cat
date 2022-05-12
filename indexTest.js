const args = process.argv.slice(2);
let breed = args[0];

const { fetchInfo } = require('./breedFetcher');

fetchInfo(breed) 