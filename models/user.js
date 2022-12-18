const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }, // university email address
    password: { type: String, required: true },
    semester: { type: Number, required: true }, //semeseter of student
    courses: { type: [String], required: true }, //can be used for question posting
    type: {
        type: String,
        enum: ["Student", "Tutor"],
        default: "Student",
        required: true
    }, //type of user
    reputation: { type: Number, default: 0 }, //votes for tutor
    questionAsked: { type: Number, default: 0 },  //for student, how many question he/she has posted ?
    questionAnswered: { type: Number, default: 0 }, //for tutor, how many answer has he/she posted ?
}, { timestamps: true });

const User = global.User || mongoose.model("User", userModel);
module.exports = User;