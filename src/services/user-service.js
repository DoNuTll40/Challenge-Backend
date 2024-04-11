const prisma = require("../configs/prisma");

exports.getUserByEmail = (email) => {
  return prisma.users.findFirst({
    where: {
      user_email: email,
    },
  });
};

exports.createUser = (value, hasPassword) => {
  return prisma.users.create({
    data: {
      user_password: hasPassword,
      ...value,
    },
  });
};

exports.checkLoginEmail = (email) => {
  return prisma.users.findFirst({
    where: {
      user_email: email,
    },
  });
};

exports.getUserById = (id) => {
  return prisma.users.findFirst({
    where: {
      user_id: +id,
    },
  });
};

exports.checkPhone = (user_phone) => {
  return prisma.users.findFirst({
    where: {
      user_phone,
    }
  })
}