const{
    addNewProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
}=require("../controller/product.controller");

// Add new Product - create 
productRoutes.post("/",addNewProduct);

// get all product - read
productRoutes.get("/",getAllProduct);

// get single product - read 
productRoutes.get("/:id",getProduct);

// replace data -  put 
productRoutes.put("/:id",replaceProduct);

// update data - patch 
productRoutes.patch("/:id",updateProduct);

// delete data - delete
productRoutes.deletw("/:id",deleteProduct);

module.exports= productRoutes;