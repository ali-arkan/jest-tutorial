
/*
we are going to mock the the axis module on this test
reference: https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
*/

// index.test.js
const getAlbumTitle = require('./album');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 2,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await getAlbumTitle(0);
  expect(title).toEqual('My First Album');


  const title2 = await getAlbumTitle(1);
  expect(title2).toEqual('Album: The Sequel');
});