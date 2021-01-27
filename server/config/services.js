module.exports = {
  image: {
    api: '/api/item/:id',
    url: 'http://localhost:3004',
    bundle: 'bundle.js',
  },
  cart: {
    api: '/api/item/:itemID',
    url: 'http://localhost:3003',
    bundle: 'app.js',
  },
  reviews: {
    api: '/api/reviews',
    url: 'http://localhost:3002',
    bundle: 'app.js',
  },
  related: {
    api: '/api/relatedItems/:id',
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
};
