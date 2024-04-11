require("dotenv").config();
const userService = require("../services/user-service");
const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return createError(400, "Unauthorized");
    }

    const arrayToken = authorization.split(" ");
    const token = arrayToken[1];

    if (arrayToken[0] !== "Bearer" || !token) {
      return createError(400, "Unauthorized");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (
      typeof payload !== "object" ||
      !payload?.id ||
      typeof payload.id !== "number"
    ) {
      return createError(400, "Payload not in correct format");
    }

    const user = await userService.getUserById(payload.id);

    if (!user) {
      return createError(400, "User id not found");
    }

    req.user = user;
    next();

  } catch (err) {
    next(err);
    console.log(err);
  }
};

module.exports = authenticate;
