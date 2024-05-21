const categories = require("../models/category")

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({})
    next()
}

const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
      console.log(req.body);
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
  }
};

const findCategoryById = async (req, res, next) => {
  try {
    req.category = await categories.findById(req.params.id);
    next();
  }

  catch(err) {
    res.setHeader('Content-Type', 'application/json')
    res.status(400).send(JSON.stringify({message: "An error occured"}))
  }
}

const updateCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления категории" });
  }
}; 

const deleteCategory = async (req,res,next) => {
  try{
    req.categories = await categories.findByIdAndDelete(req.params.id, req.body)
    next()
  }
  catch(err) {
    res.setHeader('Content-Type', 'application/json')
    res.status(400).send(JSON.stringify({message: 'An error occured'}))
  }
}

module.exports = { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory};