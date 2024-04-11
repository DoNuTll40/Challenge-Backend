const prisma = require("../configs/prisma");
const createError = require("../utils/createError");

exports.getAllUser = async (req, res, next) => {
  try {
    const fullUser = await prisma.users.findMany();
    res.json({ fullUser });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const del = await prisma.users.delete({
      where: {
        user_id: +id,
      },
    });
    res.json({ message: "Delete users success!" });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.updateRoleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user_role } = req.body;
    const upRole = await prisma.users.update({
      where: {
        user_id: +id,
      },
      data: {
        user_role,
      }
    });
    res.json({ upRole, message: "Delete users success!" });
  } catch (err) {
    next(err);
    console.log(err);
  }
};
