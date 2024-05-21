const categoriesRouter = require("express").Router();
const apiRouter = require("express").Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
const { checkIsCategoryExists, checkEmptyName } = require("../middlewares/games");
const { checkAuth } = require("../middlewares/checkAuth");

apiRouter.use("/api", categoriesRouter); 

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById )
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;

