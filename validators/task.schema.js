import { z } from "zod";

export const createTaskSchema = z.object({

  title: z.string().min(1, "Título é obrigatório"),

});

export const updateTaskSchema = z.object({

  completed: z.boolean(),
  
});