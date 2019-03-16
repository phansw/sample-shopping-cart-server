const { PaymentError } = require('@feathersjs/errors');
const stripe = require('stripe')('sk_test_qQpAIO1YXkLZovyKxwDxGFWJ');
const logger = require('../logger');

module.exports = () => {
  return async (context) => {
    const { stripeToken, amount, currency } = context.data;
    const adjustedAmount = Math.floor(amount);
    context.data.adjustedAmount = adjustedAmount;

    try {
      await stripe.charges.create({
        amount: adjustedAmount,
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
