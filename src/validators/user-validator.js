
const joi = require('joi');

exports.createUsers = joi.object({
    user_email: joi.string().required(),
    user_password: joi.string().required().strip(),
    confirmPassword: joi.string().required().strip(),
    user_firstname: joi.string().required(),
    user_lastname: joi.string().required(),
    user_phone: joi.string().required(),
})

exports.updateUsers = joi.object({
    user_email: joi.string().required(),
    user_password: joi.string().required().strip(),
    user_firstname: joi.string().required(),
    user_lastname: joi.string().required(),
    user_phone: joi.string().required(),
})