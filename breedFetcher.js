const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

        request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
        const data = JSON.parse(body);
        if (!data[0]) return console.log('Breed Not Found');
        const desc = data[0].description;
        callback(error, desc);
    });

};

module.exports = { fetchBreedDescription }

// Kinda understand but not that clear