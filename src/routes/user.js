const express = require("express");
const User = require("../db/models");
const router = express.Router();
const passport = require("../config/passport");
const { isAdmin } = require("../routes/middlewares");

const {
  register,
  logIn,
  logOut,
  update,
  userDelete,
  changePassword,
  me,
  changeAdminUser,
  getUsers
} = require("../resolvers/user-Resolvers");

//register user
router.post("/register", register);

//logIn user
router.post("/login", passport.authenticate("local"), logIn);

//reset user password
// router.post("/resetPassword", resetPassword);

//logOut user
router.get("/logout", logOut);

//change password
router.put("/changePassword/:id", changePassword);

//delete
router.get("/delete/:id", userDelete);

//Traer todos los users por search
router.get("/search", isAdmin, getUsers);

// Cambiar status isAdmin
router.put("/users/:id", isAdmin, changeAdminUser);

//me
router.get("/me", me);

//Edit User
router.put("/update", update);

module.exports = router;
