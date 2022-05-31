const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'raw2002',
        mongodb_password: 'soxaOFaVBk5IWsWj',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'raw2002',
      mongodb_password: 'soxaOFaVBk5IWsWj',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    },
  };
};
