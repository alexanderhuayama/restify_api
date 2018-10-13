'use strict';

const controller = require('../controllers/user');

module.exports = server => {
  server.get('/user', controller.getAllUsers);
  server.get('/user/:id', controller.getUser);
  server.post('/user', controller.addUser);
  server.put('/user/:id', controller.updateUser);
  server.del('/user/:id', controller.deleteUser);
};