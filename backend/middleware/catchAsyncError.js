module.exports = (functionTHun) => (req, res, next) => {
  Promise.resolve(functionThun(req, res, next)).catch(next);
};
