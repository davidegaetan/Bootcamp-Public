const ProductController = require("../controller/pim.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/product/:id", ProductController.findOneProduct);
    app.post("/api/product/new", ProductController.insertNewProduct);
    app.put("/api/product/:id/edit", ProductController.updateProduct);
    app.delete("/api/product/:id/delete", ProductController.deleteProduct);
}