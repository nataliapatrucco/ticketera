const express = require("express");
const User = require("../db/models");
const router = express.Router();
const passport = require("../config/passport");
const {
  register,
  logIn,
  logOut,
  update,
  userDelete,
  changePassword,
  me
} = require("../resolvers/userResolver");

//registrar usuario
router.post("/register", register);

//logIn
router.post("/login", passport.authenticate("local"), logIn);

//logOut
router.get("/logout", logOut);

//update
router.put("/update", update);

//change password
router.put("/changePassword/:id", changePassword);

//delete
router.get("/delete/:id", userDelete);

//me
router.get("/me", me);

module.exports = router;
