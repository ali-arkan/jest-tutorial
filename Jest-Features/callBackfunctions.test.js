function fetchData(url, callback) {
    // Simulate an asynchronous operation, like fetching data from a server
    setTimeout(() => {
        const data = { message: "Data successfully fetched!" };
        // Execute the callback function with the retrieved data
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

// Define a callback function
function handleData(data) {
    console.log(data.message);
}

// Use the fetchData function with the handleData callback
fetchData("https://jsonplaceholder.typicode.com/todos/1", handleData);
