import express from "express";
import {listProductsController ,createProductController} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", listProductsController);
router.post("/", createProductController);


export default router;