const { authenticate } = require('@feathersjs/authentication').hooks;
const stripe = require('../../hooks/stripe');
const addDateTime = require('../../hooks/addDateTime');
const addUser = require('../../hooks/addUser');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [stripe(), addDateTime('createdAt'), addUser('user')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
