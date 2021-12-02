const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
      return callback(error,null); //checking for error
    }  
      const data = JSON.parse(body);
      if (!data[0]) { // does cat exist?
        return callback("error... breed not found"); // nope cannot find breed
      }  
        return callback(null, data[0].description); // yes it does! Breed description follows...

  });
};

module.exports = { fetchBreedDescription };

