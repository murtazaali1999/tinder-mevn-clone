const { createUser, getUsers } = require("../controllers/user");

const router = require("express").Router()

router.post("/create-user", createUser);

router.get("/get-user", getUsers);

module.exports = router;