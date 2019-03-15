module.exports = function (key) {
  return (context) => {
    context.data[key] = new Date();
    return context;
  };
};
