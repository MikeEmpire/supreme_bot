// eslint-disable-next-line
module.exports =
  process.env.NODE_ENV === 'test'
    ? 'https://files.grolens.app'
    : 'http://localhost:4444';
