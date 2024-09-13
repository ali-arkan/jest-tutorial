
/*
  Reference: https://www.youtube.com/watch?v=iN86lpkRcDk&list=PLrZyA4KBTQriFZkYhvhy1KFM21-l7VyL-&index=6&t=514s&ab_channel=ScaffoldHub
  https://www.youtube.com/watch?v=ajiAl5UNzBU&ab_channel=LaithAcademy
*/

// Main function definition
export function forEach(items, callback) {
    for (const item of items) {
      callback(item);
    }
  }
  
  //mock callback function definition
  const mockCallback = jest.fn(x => 42 + x);
  
  
  test('forEach mock function', () => {
    // Calling the main function with passing mock function as parameter
    forEach([0, 1, 2], mockCallback);
  
    // The return values call to the function
    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);
    expect(mockCallback.mock.results[2].value).toBe(44);
  });
  

  test("this",()=>{
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log(myMock1.mock.instances);
    // > [ <a> ]
    
    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts);
    // > [ <b> ]
   
  })
  
  
  test("someMockFunction",() =>{
  
    const someMockFunction = jest.fn(()=>"return value");
  
    someMockFunction("first arg","second arg");
  
  // The function was called exactly once
  expect(someMockFunction.mock.calls).toHaveLength(1);
  
  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
  
  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
  
  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value');
  
  const someMockConstructor = jest.fn();
  const a = new someMockConstructor();
  a.name ="test";
  const b = new someMockConstructor();
  
  // The function was called with a certain `this` context: the `element` object.
  //expect(someMockConstructor.mock.contexts[0]).toBe(element);
  
  // This function was instantiated exactly twice
  expect(someMockConstructor.mock.instances.length).toBe(2);
  
  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(someMockConstructor.mock.instances[0].name).toBe('test');
  
  // The first argument of the last call to the function was 'test'
  //expect(someMockConstructor.mock.lastCall[0]).toBe('test');
  })
  
  
  
  test("mockReturnValue Once",()=>{
    const myMock = jest.fn();
    console.log("return value 1: " + myMock());
  // > undefined
  
  myMock.
  mockReturnValueOnce(10).
  mockReturnValueOnce('x').
  mockReturnValue(true);

  
  console.log("return value 2: " + myMock(), myMock(), myMock(), myMock(),myMock());
  // > 10, 'x', true, true
  })
  
  