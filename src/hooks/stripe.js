const { PaymentError } = require('@feathersjs/errors');
const stripe = require('stripe')('sk_test_qQpAIO1YXkLZovyKxwDxGFWJ');

module.exports = () => {
  return async (context) => {
    const { stripeToken, amount } = context.data;

    try {
      await stripe.charges.create({
        amount,
        currency: 'usd',
        description: 'Example charge',
        source: stripeToken,
      });
    } catch (e) {
      throw new PaymentError('Check card details');
    }

    return context;
  };
};
