const { PaymentError } = require('@feathersjs/errors');
const stripe = require('stripe')('sk_test_qQpAIO1YXkLZovyKxwDxGFWJ');
const logger = require('../logger');

module.exports = () => {
  return async (context) => {
    const { stripeToken, amount, currency } = context.data;

    try {
      await stripe.charges.create({
        amount,
        currency,
        description: 'The Corner Bookstore purchase',
        source: stripeToken,
      });
    } catch (e) {
      logger.error(e);
      throw new PaymentError('Check card details');
    }

    return context;
  };
};
