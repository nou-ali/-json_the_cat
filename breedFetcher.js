const request = require('request');
//const fetch = require("node-fetch");

let descriptionUrl = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

//http request
request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
      if (err) {
        console.log(err) 
      }

    });