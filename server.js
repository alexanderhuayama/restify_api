'use strict';

const restify = require('restify'),
  mongoose = require('mongoose'),
  restifyPlugins = require('restify-plugins'),
  router = require('./routes');

// Initialize Server
const server = restify.createServer();

// Middleware
server
  .use(restifyPlugins.jsonBodyParser({ mapParams: true }))
  .use(restifyPlugins.acceptParser(server.acceptable))
  .use(restifyPlugins.queryParser({ mapParams: true }))
  .use(restifyPlugins.fullResponse());

// Load routes
router(server);

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/restify', { useNewUrlParser: true })
  .then(data => {
    console.log('***Database connected');

    // Start Server
    server.listen(3000, () => {
      console.log('***Server running');
    });
  })
  .catch(error => console.log(error));