import express, { json } from "express";
import "express-async-errors";
import { authRouter } from "./auth/authRoutes";
import { commentRouter } from "./comment/commentRoutes";
import { errorMiddleware } from "./errorMiddleware";

const app = express();
app.use(json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/comments", commentRouter);
app.use(errorMiddleware);

const port = 3000;
app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
