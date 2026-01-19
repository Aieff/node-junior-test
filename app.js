import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// Habilitar a leitura de JSON
app.use(express.json());

// Habilitar Cors (Cross-Origin Resource Sharing)
// Controla quem pode acessar sua API de outro domínio
app.use(cors());

// Health check (Validação de API Online)
app.get('/health', (req, res) => {
  return res.status(200).json(
        { status: 'ok' }
    );
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/task", taskRoutes);

export default app;