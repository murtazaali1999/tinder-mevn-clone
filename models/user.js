const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
});

const User = mongoose.model("User", userModel);

module.exports = User;