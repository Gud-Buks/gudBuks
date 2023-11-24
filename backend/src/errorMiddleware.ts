import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  // should never happen, but who knows
  if (!error) {
    console.error("Empty error thrown");
    return res.status(500).send("Unknown server error");
  }

  if (error.code === "credentials_required") {
    return res.status(401).send("No authorization token was found");
  }

  if (typeof error.status === "number") {
    res.status(error.status);
  }

  if (typeof error.message === "string") {
    return res.send(error.message);
  }

  return res.status(500).send("Unknown server error");
}
