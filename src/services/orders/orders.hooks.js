const { authenticate } = require('@feathersjs/authentication').hooks;
const stripe = require('../../hooks/stripe');
const addDateTime = require('../../hooks/addDateTime');
const addUser = require('../../hooks/addUser');
const filter = require('../../hooks/filter');
const updateStock = require('../../hooks/updateStock');
const validatePaymentAmount = require('../../hooks/validatePaymentAmount');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [validatePaymentAmount(), stripe(), addDateTime('createdAt'), addUser('user')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [updateStock(), filter(['stripeToken', 'user', 'Authorization'])],
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
