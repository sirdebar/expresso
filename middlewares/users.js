const { findByIdAndDelete } = require('../models/category');
const users = require('../models/user');
const bcrypt = require('bcryptjs')

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}

const createUser = async (req,res, next) => {
  try {
    console.log(req.body);
    req.users = await users.create(req.body);
  }
  catch(err) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({message: "Error creating category"}))
  }
  };

  const findUserById = async (req, res, next) => {
    try {
      req.user = await users.findById(req.params.id);
      next();
    }
  
    catch(err) {
      res.setHeader('Content-Type', 'application/json')
      res.status(400).send(JSON.stringify({message: "An error occured"}))
    }
  }

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления пользователя" });
  }
};

  const deleteUser = async (req, res, next) => {
    console.log("DELETE /users/:id");
    try {
      req.user = await users.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка удаления пользователя" }));
    }
  }; 

  const filterPassword = (req, res, next) => {
    const filterUser = (user) => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    };
    if (req.user) {
      req.user = filterUser(req.user);
    }
    if (req.usersArray) {
      req.usersArray = req.usersArray.map((user) => filterUser(user));
    }
    next();
  };

    const hashPassword = async (req,res, next) =>  {
      try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash;
        next();
      }
      catch(error) {
        res.status(400).send(JSON.stringify({message: "Ошибка кеширования"}))
      }
    }


module.exports ={findAllUsers, createUser, findUserById, updateUser, deleteUser, filterPassword, hashPassword};