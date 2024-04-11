
const prisma = require("../configs/prisma");
const { createRecord, updateRecord } = require("../validators/record-validator");

exports.getAllRecord = async (req, res, next) => {
  try {
    const get = await prisma.record.findMany({
        orderBy: {
            rec_create_at: "desc"
        },
        include: {
            users: true
        }
    });
    res.json({ get, message: "Get all record success!" });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.createCarRecord = async (req, res, next) => {
    try {
        const value = await createRecord.validateAsync(req.body);

        const post = await prisma.record.create({
            data: {
                users: {
                    connect: {
                        user_id: req.user.user_id
                    }
                },
                ...value,
            }
        })
        res.json({ post, message: "Create car record success!" })
    } catch(err) {
        next(err);
        console.log(err);
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
    }
}

exports.deleteCarRecord = async (req, res, next) => {
    try {
        console.log(req.params)
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
    }
}