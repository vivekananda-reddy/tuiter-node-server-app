import express from 'express';
import HelloControllers from "./controllers/hello-controllers.js";
import UserController from "./controllers/users/users-controller.js";
const app = express()
app.use(express.json());

HelloControllers(app)
UserController(app)
app.listen(4000)