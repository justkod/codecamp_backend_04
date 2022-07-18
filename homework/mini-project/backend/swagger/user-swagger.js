/**
 * @swagger
 * /user:
 *   post:
 *     summary: 유저 등록
 *     tags: [Users]
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             arr:
 *                                type: object
 *                                properties:
 *                                      name:
 *                                          type : string
 *                                          required: true
 *                                          example: 최현웅
 *                                      email:
 *                                          type : string
 *                                          required: true
 *                                          example: luckoding@gmail.com
 *                                      personal:
 *                                          type : string
 *                                          required: true
 *                                          example: 111111-1111111
 *                                      prefer:
 *                                          type : string
 *                                          required: true
 *                                          example: http://naver.com
 *                                      pwd:
 *                                          type : string
 *                                          required: true
 *                                          example: 1234
 *                                      phone:
 *                                          type : string
 *                                          required: true
 *                                          example: "01024345605"
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: 62d4a7c4a89cbaa0734df055
 *
 *
 *       422:
 *         description: 에러!!! 핸드폰 번호가 인증되지 않았습니다.
 *       401:
 *         description: 에러!!! 인증번호가 인증되지 않았습니다.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 목록 조회
 *     tags: [Users]

 *     responses:
 *       200:
 *          description: 성공
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          arr:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type : string
 *                                      required: true
 *                                      example : 네이버
 *                                  description:
 *                                      type : string
 *                                      required: true
 *                                      example : 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 *                                  image:
 *                                      type : string
 *                                      required: true
 *                                      example : https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                          name:
 *                              type: string
 *                              required: true
 *                              example: 철수
 *                          email:
 *                              type: string
 *                              required: true
 *                              example: codecamp@naver.com
 *                          personal:
 *                              type: string
 *                              required: true
 *                              example: 111111-1******
 *                          prefer:
 *                              type: string
 *                              required: true
 *                              example: http://naver.com
 *                          pwd:
 *                              type: string
 *                              required: true
 *                              example: 1111
 *                          phone:
 *                              type: string
 *                              required: true
 *                              example: 01012345678
 *
 */
