module.exports = function (keys) {
  return (context) => {
    const { result } = context;
    keys.forEach(key => delete result[key]);

    return context;
  };
};
