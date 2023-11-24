import cors from "cors";
import express from "express";
import "express-async-errors";
import proxy from "express-http-proxy";
import swaggerUi from "swagger-ui-express";
import { bookRoutes } from "./bookRoutes";
import { errorMiddleware } from "./errorMiddleware";
import { openApiDocument } from "./openApiDocument";

const app = express();
const port = 8080;

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use("/books", bookRoutes);
app.use(proxy("http://localhost:3000"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
