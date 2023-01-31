const Product = require("../models/pim.model");
const mongoose = require("mongoose")

// module.exports.findAllProducts = (req,res) => {
//     Product.find()
//     .then(allProducts => res.json({Products: allProducts}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// }

// module.exports.findOneProduct = (req,res) => {
//     Product.findOne({_id: req.params.id})
//     .then(oneProduct => res.json({Products: oneProduct}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// }

module.exports.insertNewProduct = (req,res) => {
    Product.create(req.body)
    .then(newProduct => res.json({product: newProduct}))
    .catch(err => res.json({ message: "Something went wrong this is running", error: err }));
}

// module.exports.updateProduct = (req,res) => {
//     Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedProduct => res.json({Products: updatedProduct}))
//     .catch(err => res.json({ message: "Something went wrong", error: err}));
// }

// module.exports.deleteProduct = (req,res) => {
//     Product.remove({ _id: req.params.id })
//     .then(result => res.json({result: result}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// }