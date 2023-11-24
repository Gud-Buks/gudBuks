import { expressjwt } from "express-jwt";
import { JWT_SECRET } from "./env";

export const jwtMiddleware = expressjwt({
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});
