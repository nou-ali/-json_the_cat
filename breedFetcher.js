const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      return callback(err); //checking for error
    } else {
      const data = JSON.parse(body);
      if (data[0] === 0) { // does cat exist?
        return callback(null, "error... breed not found"); // nope cannot find breed
      } else {
        return callback(null, data[0]['description']); // yes it does! Breed description follows...

      }
    }

  });
};

module.exports = { fetchBreedDescription };
