const request = require('request');

const fetchInfo = (breed) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
        if (error) return error.message; // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        const data = JSON.parse(body);
        if (!data[0]) return console.log('Breed Not Found');

        const desc = data[0].description;
        let delay = 0
        for (let char of desc) {
            delay += 20;
            setTimeout(() => {
                process.stdout.write(`${char}`);
            }, delay);
        };
        return desc;

    });
};

module.exports = {
    fetchInfo,
}

