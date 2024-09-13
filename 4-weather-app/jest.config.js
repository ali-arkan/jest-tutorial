module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'node',
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  