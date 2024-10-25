const dynamoDb = require('./dependencies');

const getItem = async (id) => {
  const params = {
    TableName: 'MockDBTable',
    Key: { id },
  };

  const result = await dynamoDb.get(params).promise();
  return result.Item;
};

module.exports = { getItem };
