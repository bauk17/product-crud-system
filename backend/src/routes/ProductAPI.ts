import express from "express";
import * as ProductController from "../controllers/ProductController";

const router = express.Router();

router.post("/new-product", ProductController.newProduct); // Create
router.get("/get-products", ProductController.getProducts); // Read
router.get("/get-product/:id", ProductController.findProduct); // Read
router.put("/product/:id", ProductController.updateProduct); // Update
router.delete("/product/:id", ProductController.removeProdcut); // Delete

export default router;
