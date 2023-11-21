module.exports = (req, res, next) => {
  if (req.method === "POST") {
    req.body.userId = "john-doe";
  }
  next();
};
