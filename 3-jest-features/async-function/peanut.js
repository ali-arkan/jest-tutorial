// The fetchData function simulates an asynchronous data fetching operation.
// It takes a callback function (peanutFunction) as an argument and invokes it
// after a delay of 1000 milliseconds.

function fetchData(peanutFunction) {
  // Simulate asynchronous data fetching using setTimeout
  setTimeout(() => {
    // Define the fetched data, in this case, the string 'peanut butter'
    const data = 'peanut butter';
    
    // Call the provided callback function with the fetched data
    peanutFunction(data);
  }, 1000); // 1000 milliseconds delay
}

  module.exports = fetchData;
