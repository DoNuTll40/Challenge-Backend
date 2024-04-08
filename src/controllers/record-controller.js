
const prisma = require("../configs/prisma");
const createError = require("../utils/createError");
const { createRecord, updateRecord } = require("../validators/record-validator");

exports.getAllRecord = async (req, res, next) => {
  try {
    const get = await prisma.record.findMany();
    res.json({ get, message: "Get all record success!" });
  } catch (err) {
    next(err);
    console.log(err);
    createError(400, "Error get all record car");
  }
};

exports.createCarRecord = async (req, res, next) => {
    try {
        const value = await createRecord.validateAsync(req.body);

        console.log(value)

        const post = await prisma.record.create({
            data: {
                ...value,
            }
        })
        res.json({ post, message: "Create car record success!" })
    } catch(err) {
        next(err);
        console.log(err);
        createError(400, "Error create car record!")
    }
}

exports.updateCarRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const value = await updateRecord.validateAsync(req.body);
        const patch = await prisma.record.update({
            where: {
                rec_id: +id
            },
            data: {
                ...value,
            }
        })
        res.json({ patch, message: "Update record success!" })
    } catch(err) {
        next(err);
        console.log(err);
        createError(400, "Error update car record!")
    }
}

exports.deleteCarRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const remove = await prisma.record.delete({
            where: {
                rec_id: +id
            }
        })
        res.json({ remove, message: "Remove car record success!" })
    } catch(err) {
        next(err);
        console.log(err);
        createError(400, "Error delete car record!")
    }
}