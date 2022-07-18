import express from "express";
import { BoardController } from "./mvc/controllers/board.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductController } from "./mvc/controllers/product.controller.js";

const app = express();

//게시판API
const boardController = new BoardController();
app.post("/boards", boardController.createBoards);
app.get("/boards", boardController.fetchBoards);
//상품API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API ()하면 실행해라가 되버림,X
app.post("/product/refund", productController.refundProduct); // 상품 환불하기 API

//쿠폰(상품권)API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰(상품권) 구매하기 API

app.listen(3000);
