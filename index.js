const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
        console.log('Error fetch details:', error);
        return error;
    } else {
        let delay = 0
        for (let char of desc) {
            delay += 20;
            setTimeout(() => {
                process.stdout.write(`${char}`);
            }, delay);
        };
        console.log('ok', desc);
    }
});