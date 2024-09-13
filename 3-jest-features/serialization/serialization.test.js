// Serialization (Object to JSON)
let person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let serializedPerson = JSON.stringify(person);
  console.log(serializedPerson);
  
  // Deserialization (JSON to Object)
  let jsonString = '{"name":"Jane","age":25,"city":"San Francisco"}';
  let deserializedPerson = JSON.parse(jsonString);
  console.log(deserializedPerson);
  
  it("test Serialization  and deSerialization", ()=> {

  })