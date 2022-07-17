/**
 * @swagger
 * /Starbucks:
 *   get:
 *     summary: 나만의 스타벅스 메뉴 목록
 *     tags: [Starbucks]
 *     parameters:
 *            - name: userId
 *              in: path
 *              description: 메뉴
 *              schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type : string
 *                      img:
 *                          type : string
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
 *                              example: 62d18d30dc809c23a381318f
 *                          name:
 *                              type: string
 *                              example: 카라멜 마끼아또
 *                          img:
 *                              type: string
 *                              example: https:/image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154609863.jpg
 *                          __v:
 *                              type: int
 *                              example: 0
 */
