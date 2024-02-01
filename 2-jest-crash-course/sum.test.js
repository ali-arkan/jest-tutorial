const sum = require("./sum")



describe("",()=>{
    it("should add 1+2 to equal 3",()=>{
        const result = sum (1,2);
        //expect to result equal 3
        expect(result).toBe(3);
    })

    it("object assignment",()=>{
        const obj = {};
        expect(obj).toEqual({})
    })
})


describe("arrays matcher", ()=>{
    it("has contain milk",()=>{
    const shoppingLists = [
        "diapers","kleenex","trash bags","paper towels","milk"
    ]
    expect(shoppingLists).toContain('milk')
    })
})