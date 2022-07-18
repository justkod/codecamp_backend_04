import express from "express";
import { ProductController } from "./mvc/controllers/product.controller";

const app = express();

//상품API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API ()하면 실행해라가 되버림,X
app.post("/product/refund", productController.refundProduct); // 상품 환불하기 API

app.listen(3000);
