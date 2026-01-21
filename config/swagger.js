import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST Node.js",
      version: "1.0.0",
      description: "API de tarefas com autenticação JWT"
    },
    servers: [
      {
        url: "http://localhost:3030",
        description: "Servidor local"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
    apis: ["routes/**/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);
