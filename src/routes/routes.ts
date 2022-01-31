import { Router } from "express";
import { UserController } from "../modules/Controller/UserController";

const routes = Router();

const userController = new UserController()

routes.post('/create',userController.create)

export { routes };
