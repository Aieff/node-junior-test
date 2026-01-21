import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Retorna o ID do usuário autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuário autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   example: 1
 *       401:
 *         description: Token inválido ou não informado
 */
router.get("/me", auth, (req, res) => {
  return res.json({
    userId: req.userId
  });
});


export default router;
