const db = require("../models");

// Defining methods for the orderController
module.exports = {
  findAll: function (req, res) {
    db.Order.find(req.query)
      .populate({
        path: "items",
        populate: "menuItem addOns",
      })
      .exec((err, dbModel) => {
        err ? res.status(422).json(err) : res.json(dbModel);
      });
  },
  findById: function (req, res) {
    db.Order.findById(req.params.id)
      .populate({
        path: "items",
        populate: "menuItem addOns",
      })
      .exec((err, dbModel) => {
        err ? res.status(422).json(err) : res.json(dbModel);
      });
  },
  create: function (req, res) {
    db.Order.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Order.findOneAndUpdate({ orderID: req.params.orderID }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Order.findById({ orderID: req.params.orderID })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
