const sendAllCategories = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.categoriesArray))
}

const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  };

  const sendCategoryById = (req,res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  }

const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
};

const sendCategoryUpdated = (req,res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
}

const sendCategoryDeleted = (req,res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
}

module.exports = {
  sendAllCategories, sendCategoryCreated,
   sendCategoryById, sendGameUpdated,
   sendCategoryUpdated, sendCategoryDeleted
  };