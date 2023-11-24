import express, { json } from "express";
import "express-async-errors";
import { authRouter } from "./auth/authRoutes";
import { commentRouter } from "./comment/commentRoutes";
import { errorMiddleware } from "./errorMiddleware";

import { userRouter } from "./user/userRoutes";

const app = express();
app.use(json());

app.use("/auth", authRouter);
app.use("/comments", commentRouter);
app.use("/users", userRouter);

app.use(errorMiddleware);

const port = 3000;
app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
