/**
 * @swagger
 * /starbucks:
 *      get:
 *        summary: 스타벅스 메뉴 가져오기
 *        tags: [Starbucks]
 *        parameters:
 *              - in: query
 *                name: number
 *                type: int
 *        responses:
 *          200:
 *            description: 성공
 *            content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                         properties:
 *                              name:
 *                                  type: string
 *                                  example: 에스프레소 콘파나
 *                              image:
 *                                  type: string
 *                                  example: https:/image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg
 */
