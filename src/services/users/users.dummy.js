exports.populate = async function (app) {
  const usersService = app.service('users');

  const users = await usersService.find();
  if (users.total > 0) return;

  await usersService.create({
    email: 'phan@gmail.com',
    password: 'secret',
    permissions: [
      'inventory:find',
      'inventory:get',
      'orders:create',
    ],
  });
};
