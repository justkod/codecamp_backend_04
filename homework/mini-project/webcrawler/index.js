import puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Coffee } from "./models/starbucks.model.js";

mongoose.connect("mongodb://localhost:27017/mydocker04");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(
    "https://www.starbucks.co.kr/menu/drink_list.do?CATE_CD=product_espresso"
  );
  await page.waitForTimeout(1000);

  for (let i = 1; i <= 33; i++) {
    const menu = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );

    const IMAGE_SELECTOR = `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`;
    let image = await page.evaluate((sel) => {
      return document.querySelector(sel).getAttribute("src").replace("/", "");
    }, IMAGE_SELECTOR);

    // DB에 저장
    const coffee = new Coffee({
      name: menu,
      img: image,
    });
    await coffee.save();
    console.log(`이름: ${menu}`);
    console.log(`이미지: ${image}`);
  }
  //////

  await browser.close();
}

startCrawling();
