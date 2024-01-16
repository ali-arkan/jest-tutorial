

const ArrayTest = (items,callback) => {
    for(let i = 0;i<items.length;i++){
        callback(items[i])
    }
}

//const mock = (x) => 42 + x
const mockCallback =  jest.fn(x => 42 + x );


ArrayTest([0,1], mockCallback);


it("mock callback", ()=> {

    expect(mockCallback.mock.results[0].value).toBe(42)
    expect(mockCallback.mock.results[1].value).toBe(43)

    expect(mockCallback.mock.calls.length).toBe(2)
    // [call1, call2]

   expect(mockCallback.mock.calls[0][0]).toBe(0)
   expect(mockCallback.mock.calls[1][0]).toBe(1)
})

it("mock return",()=>{

    const mock = jest.fn();
    mock.mockReturnValueOnce(true);
    const results = mock();

    expect(results).toBe(true);

})

