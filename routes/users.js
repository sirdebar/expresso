const usersRouter = require("express").Router();
const apiRouter = require("express").Router();

const { findAllUsers, findUserById, updateUser, filterPassword, deleteUser, hashPassword } = require('../middlewares/users');
const { createUser } = require('../middlewares/users');
const { sendAllUsers, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { sendUserCreated } = require('../controllers/users');
const { findGameById, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require("../middlewares/games");
const { sendGameById } = require("../controllers/games");
const { checkAuth } = require("../middlewares/checkAuth");

apiRouter.use("/api", usersRouter);

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.get('/users/:id', findGameById, filterPassword, sendGameById)
usersRouter.get('/me', checkAuth, sendMe)
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;
