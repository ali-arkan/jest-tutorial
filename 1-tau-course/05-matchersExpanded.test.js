/**
 * jest doc: https://jestjs.io/docs/using-matchers
 * String Matchers:
  - .toMatch
   - toEqual
 * Number Matchers: 
   - toBe()
    - toEqual
     expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
 * Truthiness  matchers:
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
 * Array Matchers:
    - toContain 
 */


//String Matchers:
test('there is pool in Liverpool',()=>{
    expect('Liverpool').toMatch(/pool/);
})


// Number Matchers:
const multiply = require('./03-multiply');

describe('test multiply positive scenarios',() =>{
    test('multiply 3*2 should equal to 6',() =>{
        expect(multiply(3,2)).toBe(6);
        expect(multiply(3,2)).toBeGreaterThan(5);
        expect(multiply(3,2)).toBeLessThan(7);
        expect(multiply(3,2)).toBeLessThanOrEqual(6);
    });
})




//remember types of variables in JavaScript
/*
https://code-boxx.com/javascript-null-vs-undefined-vs-empty/
*/
test('value and type of variables',()=>{

    var myVar = [, null,""," ", 123];
    console.log(myVar[0], typeof myVar[0]); // undefined, undefined -- tanımlanmamış
    console.log(myVar[1], typeof myVar[1]); // null, object -- null objesi
    console.log(myVar[2], typeof myVar[2]); // nothing, string -- empty
    console.log(myVar[3], typeof myVar[3]); // , string -- empty
    console.log(myVar[4], typeof myVar[4]); // 123, number
});


// * Truthiness  matchers:
/**
 * In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
 */

test('null test', () => {
    let n = null;
    expect(n).toBeNull(); //const n = null;
    expect(n).toBeDefined(); // let n=2;
    expect(n).not.toBeUndefined(); // let n;
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    console.log("n: "  + n);
    console.log(typeof n);
  });


  //* Array Matchers: 
  const carStock = [
    'BMW',
    'Mercedes',
    'Ferrari',
    'Toyota'
  ];

  test('that is the car stock list has a Ferrari',() =>{
    expect(carStock).toContain('Ferrari');
  });


