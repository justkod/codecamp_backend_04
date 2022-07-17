/**
 * @swagger
 * /users:
 *   post:
 *     summary: 유저 등록
 *     tags: [Users]
 *     parameters:
 *            - name: userId
 *              in: path
 *              description: 유저 등록
 *              schema:
 *                  type: object
 *                  properties:
 *                      og:
 *                          type : object
 *                          properties:
 *                              title:
 *                                  type : string
 *                              description:
 *                                  type : string
 *                              image:
 *                                  type : string
 *                      name:
 *                          type : string
 *                      email:
 *                          type : string
 *                      personal:
 *                          type : string
 *                      prefer:
 *                          type : string
 *                      pwd:
 *                          type : string
 *                      phone:
 *                          type : string
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          og:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type : string
 *                                      example : 네이버
 *                                  description:
 *                                      type : string
 *                                      example : 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 *                                  image:
 *                                      type : string
 *                                      example : https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                          name:
 *                              type: string
 *                              example: 철수
 *                          email:
 *                              type: string
 *                              example: codecamp@naver.com
 *                          personal:
 *                              type: string
 *                              example: 111111-1******
 *                          prefer:
 *                              type: string
 *                              example: http://naver.com
 *                          pwd:
 *                              type: string
 *                              example: 1111
 *                          phone:
 *                              type: string
 *                              example: 01012345678
 *
 *       422:
 *         description: 에러!!! 핸드폰 번호가 인증되지 않았습니다.
 *
 *       이메일 오류:
 *         description: 에러 발생! 이메일을 제대로 입력해 주세요
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 목록 조회
 *     tags: [Users]
 *     parameters:
 *            - name: userId
 *              in: path
 *              description: 유저 등록
 *              schema:
 *                  type: object
 *                  properties:
 *                      og:
 *                          type : object
 *                          properties:
 *                              title:
 *                                  type : string
 *                              description:
 *                                  type : string
 *                              image:
 *                                  type : string
 *                      name:
 *                          type : string
 *                      email:
 *                          type : string
 *                      personal:
 *                          type : string
 *                      prefer:
 *                          type : string
 *                      pwd:
 *                          type : string
 *                      phone:
 *                          type : string
 *     responses:
 *       200:
 *         description: 조회 성공
 *         content:
 *           application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          og:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type : string
 *                                      example : 네이버
 *                                  description:
 *                                      type : string
 *                                      example : 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 *                                  image:
 *                                      type : string
 *                                      example : https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                          name:
 *                              type: string
 *                              example: 철수
 *                          email:
 *                              type: string
 *                              example: codecamp@naver.com
 *                          personal:
 *                              type: string
 *                              example: 111111-1******
 *                          prefer:
 *                              type: string
 *                              example: http://naver.com
 *                          pwd:
 *                              type: string
 *                              example: 1111
 *                          phone:
 *                              type: string
 *                              example: 01012345678
 *
 */
