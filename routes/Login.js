const express = require("express");
require("../db/mongoose");
const cors = require("cors");
const router = express.Router();
const login = require("../controllers/Login");
const forgotPassword = require("../controllers/ForgotPassword");
router.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
router.post("/login", cors(), login);
router.post("/forget-password", cors(), forgotPassword);

module.exports = router;
