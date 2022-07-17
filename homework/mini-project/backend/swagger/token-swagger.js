/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 토큰 정보 저장
 *     tags: [Tokens]
 *     parameters:
 *            - name: userId
 *              in: path
 *              description: 토큰 정보
 *              schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type : string
 *                      phone:
 *                          type : string
 *                      isAuth:
 *                          type : boolean
 *     responses:
 *       200:
 *         description: 토큰 등록
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
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 정보 갱신
 *     tags: [Tokens]
 *     parameters:
 *            - name: userId
 *              in: path
 *              description: 토큰 정보 갱신
 *              schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type : string
 *                      phone:
 *                          type : string
 *                      isAuth:
 *                          type : boolean
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
 *                          phone:
 *                              type: string
 *                              example: "01012345678"
 *                          isAuth:
 *                              type: boolean
 *                              example: true
 */
