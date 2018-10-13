'use strict';

const User = require('../models/user'),
  errors = require('restify-errors');

function getAllUsers(req, res, next) {
  User.find()
    .then(users => res.json(200, users))
    .catch(error => next(new errors.InternalError(error.message)));
}

function getUser(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(error => next(new errors.InternalError(error.message)));
}

function addUser(req, res, next) {
  new User(req.body).save()
    .then(user => res.json(201, user))
    .catch(error => next(new errors.InternalError(error.message)));
}

function updateUser(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      if (!user)
        return res.json(404, { code: 'ResourceNotFound', message: 'The resource you requested could not be found.' })

      return User.update({ _id: req.params.id }, req.body);
    })
    .then(result => res.json(result))
    .catch(error => next(new errors.InternalError(error.message)));
}

function deleteUser(req, res, next) {
  User.deleteOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(error => next(new errors.InternalError(error.message)));
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
}