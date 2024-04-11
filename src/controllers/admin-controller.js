const prisma = require("../configs/prisma");
const createError = require("../utils/createError");

exports.getAllUser = async (req, res, next) => {
  try {
    const fullUser = await prisma.users.findMany();
    res.json({ fullUser });
  } catch (err) {
    next(err);
    console.log(err);
    createError(400, "Error get user by Admin");
  }
};
