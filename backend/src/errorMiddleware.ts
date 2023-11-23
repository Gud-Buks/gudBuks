import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  if (!error) {
    return res.status(500).send("Unknown server error");
  }

  if ((error.code = "credentials_required")) {
    return res.status(401).send("No authorization token was found");
  }

  return res.status(500).send("Unknown server error");
}
