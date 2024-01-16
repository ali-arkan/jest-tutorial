/*
 * jest doc: https://jestjs.io/docs/asynchronous
 */


//import fetchdata function
const fetchDataOverApi1 = require ('./08-fetchData.js');


//non async example
test('the user data for user 1',() => {
    const data  = fetchDataOverApi1();
     expect(data).toBe('John');
});


//async example
test('the user data for user 2', async() => {
    const data  = await fetchDataOverApi1();
     expect(data).toBe('John');
});