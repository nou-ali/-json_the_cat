const request = require('request');
const args = process.argv.slice(2); // for command line arguments

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (err, response, body) => {
  if (err) {
    console.log(JSON.parse(err))
  } 
});

