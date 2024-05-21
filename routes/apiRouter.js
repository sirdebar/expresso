const apiRouter = require("express").Router();

const authRouter = require("./auth");
const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const mainRoute = require("./main");
const usersRouter = require("./users");

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);
apiRouter.use("/api", mainRoute)

module.exports = apiRouter;