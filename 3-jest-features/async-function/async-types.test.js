/*
- JS single thread ve senkron çalışır
- Timing - Event - Http istekleri sırasında asenkron (baska bir olayın sonucusunu beklemesi) gerekir
- Aysnc yapmak için 3 yontem var: Callback, Promise ve async await kullanılır
- Callback en eskisi, bunun yerine cogunlukla async await kullanılıyor artık
- References: 
 jest doc: https://jestjs.io/docs/asynchronous
 https://www.youtube.com/watch?v=DvrTSZrBfl8&ab_channel=EnesBayram
 
 */


//import fetchdata functions
const fetchDataOverApi1 = require ('./fetchData.js');
const fetchPeanutData = require ('./peanut.js');


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


//async example with promise
test('async test: async example with promises', () => {
    return fetchDataOverApi1().then(data=>{
        expect(data).toBe('John');
    })
});

//async example with callback
  // The test function 'async test: async example with callback function' verifies
  // that the fetchData function correctly invokes the provided callback function
  // with the expected data ('peanut butter').
  
  test('async test: async example with callback function', () => {
    // Define a callback function to check if the fetched data is 'peanut butter'
    function isDataPeanut(data) {
      expect(data).toBe('peanut butter');
    }
    
    // Invoke the fetchData function with the defined callback function
    fetchPeanutData(isDataPeanut);
  });
  

