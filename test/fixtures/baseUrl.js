// eslint-disable-next-line
module.exports =
  process.env.NODE_ENV === 'test'
    ? 'https://supreme.afam.app'
    : 'http://localhost:4444';
