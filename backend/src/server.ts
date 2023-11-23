import express, { json } from "express";
import "express-async-errors";
import { authRouter } from "./auth/authRoutes";
import { commentRouter } from "./comment/commentRoutes";
import { errorMiddleware } from "./errorMiddleware";

import { expressjwt } from "express-jwt";
import { JWT_SECRET } from "./env";
import { userRouter } from "./user/userRoutes";

const app = express();
app.use(json());

app.use("/auth", authRouter);
app.use(expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] }));

app.use("/comments", commentRouter);
app.use("/users", userRouter);

app.use(errorMiddleware);

const port = 3000;
app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
