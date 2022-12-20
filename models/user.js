const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
});

export default mongoose.model("User", userModel);