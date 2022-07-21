import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  // qqq(): string {
  //   return 'Hello World!';
  // }

  findAll() {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
      {
        menu: '아메리카노',
        price: 4500,
        kcal: 5,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 75,
      },
      {
        menu: '카페라떼',
        price: 5000,
        kcal: 55,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 100,
      },
      {
        menu: '초코라떼',
        price: 4500,
        kcal: 65,
        saturated_fat: 100,
        protein: 0,
        salt: 0,
        sugar: 100,
        caffeine: 0,
      },
      {
        menu: '콜드브루',
        price: 4500,
        kcal: 15,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 150,
      },
      {
        menu: '블랙티',
        price: 5000,
        kcal: 25,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 100,
      },
    ];

    // 2. 꺼내온 결과 응답 주기
    return result;
  }

  create({ createStarbuckInput }) {
    console.log(createStarbuckInput);
    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    return '등록에 성공하였습니다.';
  }
}
