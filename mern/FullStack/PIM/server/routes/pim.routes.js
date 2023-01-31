const ProductController = require("../controller/pim.controller");

module.exports = app => {
    // app.get("/api/product/", ProductController.findAllProducts);
    // app.get("/api/product/:id", ProductController.findOneProduct);
    app.post("/api/product/new", ProductController.insertNewProduct);
    // app.put("/api/product/update/:id", ProductController.updateProduct);
    // app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}