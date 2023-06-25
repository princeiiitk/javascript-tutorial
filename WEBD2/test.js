const fetch = require('node-fetch');

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));