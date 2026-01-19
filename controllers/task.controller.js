import prisma from "../config/prisma.js";
import { createTaskSchema } from "../validators/task.schema.js";
import { ZodError } from "zod";

export async function createTask(req, res) {
  try {
    const data = createTaskSchema.parse(req.body);

    const task = await prisma.task.create({
      data: {
        title: data.title,
        userId: req.userId,
      },
    });

    return res.status(201).json(task);

  } catch (error) {

    if (error instanceof ZodError) {
      return res.status(400).json({
        errors: error.issues.map(issue => issue.message)
      });
    }

    return res.status(500).json({ 
        error: "Erro interno do servidor." 
    });

  }
}

export async function listTasks(req, res) {

    const userId = req.userId;

    const tasks = await prisma.task.findMany({
        where: { userId }
    });

    return res.json(tasks);

}

export async function listOneTask(req, res) {

    const { id } = req.params;
    const userId = req.user;

    const task = await prisma.task.findFirst({
        where: {
        id: Number(id),
        userId
        }
    });

    if (!task) {
        return res.status(404).json({
            error: "Tarefa não encontrada."
        });
    }

    return res.json(task);

}


export async function updateTask(req, res) {

    const { id } = req.params;
    const { completed } = req.body;
    const userId = req.userId;

    const task = await prisma.task.findFirst({
        where: { id: Number(id), userId }
    });
    
    if(!task) {
        return res.status(404).json({
            error: "Tarefa não encontrada."
        });
    }

    const updated = await prisma.task.update({
        where: { id: Number(id) },
        data: { completed }
    });

    return res.json(updated)

}

export async function deleteTask(req, res) {
    
    const { id } = req.params;
    const userId = req.userId;

    const task = await prisma.task.findFirst({
        where: { id: Number(id), userId }
    });

    if(!task){
        return res.status(404).json({
            error: "Tarefa não encontrada."
        });
    }
    
    await prisma.task.delete({
        where: { id: Number(id) }
    });

    return res.status(204).send();

}