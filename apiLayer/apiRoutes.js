const express = require("express");
const usersRouter = require("./usersRoutes");
const authRouter = require("./GoogleAuthRoutes");
const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/auth", authRouter);

module.exports = { apiRouter };
