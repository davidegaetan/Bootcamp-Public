const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:"",
    price: 0,
    description: ""
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;