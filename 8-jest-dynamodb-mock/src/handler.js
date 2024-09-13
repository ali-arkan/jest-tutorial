const dynamoDb = require('./dependencies');

const getItem = async (id) => {
  const params = {
    TableName: 'YourTableName',
    Key: { id },
  };

  const result = await dynamoDb.get(params).promise();
  return result.Item;
};

module.exports = { getItem };
