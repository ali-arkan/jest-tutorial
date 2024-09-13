/*
 * jest doc: https://jestjs.io/docs/asynchronous
 */


//import fetchdata function
const fetchDataOverApi1 = require ('./08-fetchData.js');


//non async example
test('async test: non sync example',() => {
    const data  = fetchDataOverApi1();
     expect(data).toBe('John');
});


//async example with async/await
test('async test: async example with async/await', async() => {
    const data  = await fetchDataOverApi1();
     expect(data).toBe('John');
});


