import { Router } from "express";
import { menuRouter } from "./menu.router";

export const apiRouter = Router();

// /api/v1/menus
apiRouter.use('/menus', menuRouter);
