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


it("mock axios", async()=>{
    jest.spyOn(axios,"get").mockReturnValueOnce({
        data:{
            id : 1,
            todo: "get 10k income"
        }
    })
    const results = await fetchData(1);

    expect(results.todo).toBe("get 10k income")

})