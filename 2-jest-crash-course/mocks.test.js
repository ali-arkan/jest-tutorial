

const axios = require("axios");

// get function with a parameter
const fetchData = async(id) => {
    //assign get api result to results variable
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    //console.log(results);

    //return result data
    return results.data;
};



const forEach = (items,callback) => {
    for(let i = 0; i<items.length;i++){
        callback(items[i])
    }
}

it("mock axios")


