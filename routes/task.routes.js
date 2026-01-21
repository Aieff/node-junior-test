import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createTask, listTasks, listOneTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Estudar Node.js
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Não autorizado
 */
router.post("/", auth, createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Listar tarefas do usuário autenticado
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   completed:
 *                     type: boolean
 *       401:
 *         description: Não autorizado
 */
router.get("/", auth, listTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Buscar uma tarefa pelo ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *       404:
 *         description: Tarefa não encontrada
 *       401:
 *         description: Não autorizado
 */
router.get("/:id", auth, listOneTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar uma tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       401:
 *         description: Não autorizado
 */
router.put("/:id", auth, updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deletar uma tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       204:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       401:
 *         description: Não autorizado
 */
router.delete("/:id", auth, deleteTask);


export default router;