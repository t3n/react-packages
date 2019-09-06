module.exports = {
  client: {
    includes: ['./packages/**/*.tsx'], // array of glob patterns
    service: {
      name: 't3n-api',
      url: 'https://api.stage.t3n.de/'
    }
  }
};
