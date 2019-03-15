module.exports = function (key) {
  return (context) => {
    const { email, _id } = context.params.user;
    context.data[key] = {
      email,
      _id,
    };
    return context;
  };
};
