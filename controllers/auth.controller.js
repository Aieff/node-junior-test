import { registerUser, loginUser } from "../services/auth.service.js";
import { registerSchema, loginSchema } from "../validators/auth.schema.js";
import { ZodError } from "zod";

export async function register(req, res) {
  try {
    const data = registerSchema.parse(req.body);

    const user = await registerUser(data);

    return res.status(201).json(user);

  } catch (error) {

    if (error instanceof ZodError) {
      return res.status(400).json({
        errors: error.issues.map(issue => issue.message)
      });
    }

    if (error.message === "EMAIL_EXISTENTE") {
      return res.status(400).json({
        error: "Email já está em uso."
      });
    }

    return res.status(500).json({
      error: "Erro interno do servidor."
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const token = await loginUser({ email, password });

    return res.json({ token });

  } catch (error) {

    if (error instanceof ZodError) {
      return res.status(400).json({
        errors: error.issues.map(issue => issue.message)
      });
    }

    if (error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({
        error: "Email ou senha inválidos."
      });
    }

    return res.status(500).json({
      error: "Erro interno do servidor."
    });
  }
}
