/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 토큰 정보 저장
 *     tags: [Tokens]
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                myphone:
 *                                    type : string
 *                                    required: true
 *                                    example: "01012345678"
 *     responses:
 *       200:
 *         description: 핸드폰으로 인증문자가 전송되었습니다!
 *         content:
 *           application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: string
 *                              example: "123456"
 *                          phone:
 *                              type: string
 *                              example: "01012345678"
 *                          isAuth:
 *                              type: boolean
 *                              example: false
 *
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 정보 저장
 *     tags: [Tokens]
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                myphone:
 *                                    type : string
 *                                    required: true
 *                                    example: "01012345678"
 *                                token:
 *                                    type : string
 *                                    required: true
 *                                    example: "123456"
 *     responses:
 *       200:
 *         description: 토큰 정보 갱신
 *         content:
 *           application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: string
 *                              example: "123456"
 *                          myphone:
 *                              type: string
 *                              example: "01012345678"
 *                          isAuth:
 *                              type: boolean
 *                              example: true
 */
