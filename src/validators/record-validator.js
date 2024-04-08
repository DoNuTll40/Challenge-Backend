
const joi = require("joi");

exports.createRecord = joi.object({
  rec_regiscar: joi.string().required(),
  rec_brand: joi.string().required(),
  rec_model: joi.string().required(),
  rec_detail: joi.string().required(),
});

exports.updateRecord = joi.object({
  rec_regiscar: joi.string().required(),
  rec_brand: joi.string().required(),
  rec_model: joi.string().required(),
  rec_detail: joi.string().required(),
});
