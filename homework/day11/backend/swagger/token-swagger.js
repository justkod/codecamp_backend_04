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
 *                                    example: "01024345605"
 *     responses:
 *       200:
 *         description: 핸드폰으로 인증문자가 전송되었습니다!
 *
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 정보 업데이트
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
 *                                    example: "01024345605"
 *                                token:
 *                                    type : string
 *                                    required: true
 *                                    example: "123456"
 *     responses:
 *       200:
 *         description: 인증 완료
 *       422:
 *         description: 인증번호가 다릅니다
 */
