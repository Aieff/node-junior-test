import 'dotenv/config';
import app from './app.js';

// Se não houver uma porta definida roda na (3333)
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
