const dynamoDb = require('../dependencies');
const { getItem } = require('../handler');

// Jest mock function
jest.mock('../dependencies', () => ({
  get: jest.fn()
}));

describe('getItem test', () => {
  it('should return item from DynamoDB (successful case)', async () => {
    const mockItem = { id: '123', name: 'Test Item' };

    // Mock the DynamoDB get method
    dynamoDb.get.mockReturnValue({
      promise: () => Promise.resolve({ Item: mockItem })
    });

    const result = await getItem('123');

    expect(result).toEqual(mockItem); // This should pass
    expect(dynamoDb.get).toHaveBeenCalledWith({
      TableName: 'YourTableName',
      Key: { id: '123' }
    });
  });

  it('should fail when expected result does not match (failure case)', async () => {
    const mockItem = { id: '123', name: 'Test Item' };

    // Mock the DynamoDB get method
    dynamoDb.get.mockReturnValue({
      promise: () => Promise.resolve({ Item: mockItem })
    });

    // Intentionally wrong expected item to cause failure
    const expectedItem = { id: '123', name: 'Wrong Item' };

    const result = await getItem('123');

    expect(result).toEqual(expectedItem); // This should fail
    expect(dynamoDb.get).toHaveBeenCalledWith({
      TableName: 'YourTableName',
      Key: { id: '123' }
    });
  });
});