const userServices = require("../services/user-service");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUsers } = require("../validators/user-validator");

exports.registerUsers = async (req, res, next) => {
  try {

    const { user_password, confirmPassword } = req.body;

    if(user_password !== confirmPassword){
      return createError(400, "รหัสผ่านไม่ตรงกัน")
    }

    const value = await createUsers.validateAsync(req.body);

    const isUserExist = await userServices.getUserByEmail(value.user_email);

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hasPassword = await bcrypt.hash(user_password, 10);

    const create = await userServices.createUser(value, hasPassword);

    if (create) {
      return res.json({ message: "Create user success!" });
    } else {
      return createError(400, "ไม่สามารถสร้างผู้ใช้งานใหม่ได้");
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.loginUsers = async (req, res, next) => {
  try {
    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
      return createError(400, "email or password are require");
    }

    if (typeof user_email !== "string" || typeof user_password !== "string") {
      return createError(400, "email or password invalid");
    }

    const isEmailExist = await userServices.checkLoginEmail(user_email);

    if (isEmailExist === null) {
      return createError(400, "ชื่อไม่พบผู้ใช้งานบบ");
    }

    const isPasswordExist = await bcrypt.compare(
      user_password,
      isEmailExist.user_password
    );

    if(!isPasswordExist){
        return createError(400, "รหัสผ่านผิดหลาด")
    }

    const token = jwt.sign(
      { id: isEmailExist.user_id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.json({ token, message: "login success" });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.getMe = (req, res, next) => {
  res.json(req.user);
};
