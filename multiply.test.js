const multiply = require('./multiply');

describe('test multiply positive scenarios',() =>{

// Success toBe
test('multiply 3*2 should equal to 6',() =>{
    expect(multiply(3,2)).toBe(6);
    });


// Error toBe
test('multiply 4*3 should not equal to 10',() =>{
    expect(multiply(4,3)).toBe(10);
});


// Success for not.toBe
test('multiply 4*3 should  not equal to 10',() =>{
    expect(multiply(4,3)).not.toBe(10);
});


//toEqual
test('object example',()=>
{
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first:1, second: 2});
});

})