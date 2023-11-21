import "express-async-errors";

import express from "express";
import { commentRouter } from "./comment/commentRoutes";
import { errorMiddleware } from "./errorMiddleware";

const app = express();
const port = 3000;

app.use("/comments", commentRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
