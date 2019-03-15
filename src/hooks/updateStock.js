const logger = require('../logger');

module.exports = () => {
  return async (context) => {
    const inventoryService = context.app.service('inventory');
    const { items } = context.data;

    try {
      for (let i = 0; i < items.length; i++) {
        const { _id, qty } = items[i];
        const inventoryItem = await inventoryService.get(_id);
        const newQty = Math.max(0, inventoryItem.qty - qty);
        await inventoryService.update(_id, {
          ...inventoryItem,
          qty: newQty,
        });
      }
    } catch (e) {
      logger.error(e);
    }

    return context;
  };
};
