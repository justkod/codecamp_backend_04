import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CashService } from "./mvc/controllers/services/cash.js";
import { PointService } from "./mvc/controllers/services/point.js";
import { ProductService } from "./mvc/controllers/services/product.js";

const app = express();

// 서비스 의존성들
const cashService = new CashService();
const productService = new ProductService();
const pointService = new PointService(); //new 한번으로 모든곳에서 재사용가능 (싱글톤패턴)

//상품API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API ()하면 실행해라가 되버림,X
app.post("/product/refund", productController.refundProduct); // 상품 환불하기 API

//쿠폰(상품권)API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon); // 쿠폰(상품권) 구매하기 API

//게시판API
// const boardController = new BoardController();
// app.post("/boards", boardController.createBoards);
// app.get("/boards", boardController.fetchBoards);

app.listen(3000);
