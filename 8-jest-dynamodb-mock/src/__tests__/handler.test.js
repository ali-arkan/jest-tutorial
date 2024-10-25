// Import the DynamoDB client from the dependencies module
const dynamoDb = require('../dependencies'); // Correct path to dependencies

// Import the getItem function from the handler module
const { getItem } = require('../handler'); // Correct path to handler

// Mock the dependencies module for testing
jest.mock('../dependencies', () => ({
  get: jest.fn() // Mock the get method of the DocumentClient
}));

describe('getItem', () => {
  // Test case: should return item from DynamoDB
  it('should return item from DynamoDB', async () => {
    // Define a mock item that simulates what DynamoDB would return
    const mockItem = { id: '123', name: 'Test Item' };

    // Mock the DynamoDB get method to return the mock item
    dynamoDb.get.mockReturnValue({
      promise: () => Promise.resolve({ Item: mockItem }) // Return a resolved promise with the mock item
    });

    // Call the getItem function with the specified id
    const result = await getItem('123');

    // Check if the result matches the expected mock item
    expect(result).toEqual(mockItem);
    
    // Verify that the get method was called with the correct parameters
    expect(dynamoDb.get).toHaveBeenCalledWith({
      TableName: 'MockDBTable', // The name of the DynamoDB table
      Key: { id: '123' } // The key to look up in the table
    });
  });

  // Test case: should fail when expected result does not match
  it('should fail when expected result does not match', async () => {
    // Define a mock item to return and an expected item that should cause a failure
    const mockItem = { id: '123', name: 'Test Item' };
    const expectedItem = { id: '123', name: 'Wrong Item' }; // This should be the expected wrong item

    // Mock the DynamoDB get method to return the mock item
    dynamoDb.get.mockReturnValue({
      promise: () => Promise.resolve({ Item: mockItem }) // Return a resolved promise with the mock item
    });

    // Call the getItem function with the specified id
    const result = await getItem('123');

    // Check that the result does not match the expected wrong item
    expect(result).not.toEqual(expectedItem); // Assert that they are not equal
  });
});
