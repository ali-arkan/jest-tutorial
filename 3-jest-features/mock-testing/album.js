// index.js
const axios = require('axios');

async function AlbumTitle(id) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
  return response.data[id].title;
}


module.exports = AlbumTitle;