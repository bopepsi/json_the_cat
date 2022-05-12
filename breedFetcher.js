const args = process.argv.slice(2);
let breed = args[0];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) return console.log('error:', error.message); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //*    console.log('body:', body); // Print the HTML for the Google homepage.

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

    // console.log(desc);

    // try {
    //     fs.writeFileSync('./index.html', content);
    //     // file written successfully
    // } catch (err) {
    //     console.error(err);
    // }

});