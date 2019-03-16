const { PaymentError } = require('@feathersjs/errors');

module.exports = () => {
  return async (context) => {
    const { amount, currency, items } = context.data;
    const inventoryService = context.app.service('inventory');
    const paymentError = new PaymentError('Payment information invalid');

    // @TODO include currency in inventory data instead of hardcoding here
    if (currency !== 'sgd') {
      throw paymentError;
    }

    let computedAmount = 0;

    try {
      for (let i = 0; i < items.length; i++) {
        const { _id, qty } = items[i];
        const { price } = await inventoryService.get(_id);
        computedAmount += price * qty;
      }
    } catch (e) {
      throw paymentError;
    }

    if (computedAmount * 100 !== amount) {
      throw paymentError;
    }

    return context;
  };
};
