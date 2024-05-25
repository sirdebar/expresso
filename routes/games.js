const gamesRouter = require('express').Router();
const apiRouter = require('express').Router()

const { createGame, findAllGames, findGameById, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvailable, checkEmptyFields, checkIsGameExists, checkEmptyName, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsVoteRequest } = require('../middlewares/games');
const { sendGameCreated, sendAllGames, sendGameById, sendGameDeleted } = require('../controllers/games');
const { sendGameUpdated } = require('../controllers/categories');
const { checkAuth } = require('../middlewares/checkAuth');

// apiRouter.use('api', gamesRouter) dsad

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated

);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);

gamesRouter.delete('/games/:id',checkAuth, deleteGame, sendGameDeleted,);

module.exports = gamesRouter;
