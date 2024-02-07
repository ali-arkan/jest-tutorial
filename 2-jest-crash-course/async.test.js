const fetchData = require("./async");

//no async
it("should return correct todo - no sync", () => {
    const todo = fetchData(1);
    expect(todo.id).toBe(1);
})

//async 1
it("should return correct todo - sync 1", () => {

    fetchData(1).then(todo=>{
        expect(todo.id).toBe(1);
    })
})

//async 2
it("should return correct todo - sync 1", async() => {
   const todo = await fetchData(15);
   expect(todo.id).toBe(15);
})
    
