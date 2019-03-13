exports.populate = async function (app) {
  const inventoryService = app.service('inventory');

  const inventory = await inventoryService.find();
  if (inventory.total > 0) return;

  await inventoryService.create({
    name: 'To Kill a Mockingbird',
    price: 8.99,
    qty: 13,
    images: ['https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UL872_FMwebp_QL65_.jpg'],
  });

  await inventoryService.create({
    name: 'Of Mice and Men',
    price: 9.90,
    qty: 5,
    images: ['https://m.media-amazon.com/images/I/71LPo9FucCL._AC_UL872_FMwebp_QL65_.jpg'],
  });

  await inventoryService.create({
    name: 'The Great Gatsby',
    price: 9.14,
    qty: 28,
    images: ['https://m.media-amazon.com/images/I/81Y2m+fNCbL._AC_UL872_FMwebp_QL65_.jpg'],
  });

  await inventoryService.create({
    name: 'Where the Red Ferns Grow',
    price: 11.89,
    qty: 18,
    images: ['https://m.media-amazon.com/images/I/91ssqXkDG5L._AC_UL872_FMwebp_QL65_.jpg'],
  });

  await inventoryService.create({
    name: 'The Count of Monte Cristo',
    price: 10.87,
    qty: 0,
    images: ['https://m.media-amazon.com/images/I/41DRCmOKIxL._AC_UL872_FMwebp_QL65_.jpg'],
  });
};
