const { PaymentError } = require('@feathersjs/errors');

module.exports = () => {
  return async (context) => {
    const { items } = context.data;
    const inventoryService = context.app.service('inventory');
    const paymentError = new PaymentError('Items invalid');

    let isValidQty = true;

    try {
      for (let i = 0; i < items.length; i++) {
        const { _id, qty: orderQty } = items[i];
        const { qty: inventoryQty } = await inventoryService.get(_id);
        if (orderQty > inventoryQty) {
          isValidQty = false;
          break;
        }
      }
    } catch (e) {
      throw paymentError;
    }

    if (!isValidQty) throw paymentError;

    return context;
  };
};
