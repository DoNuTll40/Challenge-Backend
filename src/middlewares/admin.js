const createError = require("../utils/createError");

const admin = async (req, res, next) => {
  try {
    if (req.user.user_role !== "admin") {
      return createError(403, "Forbidden");
    }
    next();
  } catch (err) {
    next(err);
    console.log(err);
  }
};

module.exports = admin;
