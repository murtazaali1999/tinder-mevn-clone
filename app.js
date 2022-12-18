//LIBRARY IMPORTS
const express = require("express");
const morgan = require("morgan"); //logs
const dotenv = require("dotenv"); //environment variables
const cors = require("cors"); //to allow backend and frontend communication, on localhost
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//FILE IMPORTS

//CONFIGS & DRIVEN
const app = express();
dotenv.config({ path: "./config.env" }); //config.env
app.use(cors()); //cors
app.use(express.json());
mongoose.set('strictQuery', false);

//ROUTES
app.use("/user", require("./routes/user"));
app.use("/answer", require("./routes/answer"));
app.use("/question", require("./routes/question"));

//PORT SETUP
const PORT = process.env.PORT || 4421;
const URI = process.env.MONGO_URI;

//LOGS
if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev")); //for logging if in development mode
}

//PORT LISTENING
app.listen(PORT, () => {
    console.log(`PORT STARTED AT ${process.env.PORT} ${process.env.NODE_ENV.toUpperCase()} MODE`);
    mongoose.connect(URI).then(() => {
        console.log("MONGO-DB CONNECTED");
    })
})

//connection check
app.get('/', (req, res) => {
    console.log("Sup");
    res.send("Hi");
})

app.post('/login', (req, res) => {

    const { userName, password } = req.body;

    try {

        if (!userName || !password)
            return res.
                status(403)
                .send("email or password field is empty");

        //find user from DB
        const found = db.find((user) => user.userName == userName && user.password == password);

        //if not found
        if (found == [] || found == undefined) {
            return res.
                status(404)
                .json({ message: "user does not exist" });
        }

        //if found then sign token
        jwt.sign(found, process.env.JWT_SECRET, { expiresIn: "1m" }, (error, token) => {
            console.log(token);
            return res.status(200)
                .json({ message: "Welcome to Jurrasic World", token: token })
                .cookie("token", token, { httpOnly: true })
        })


    } catch (error) {
        console.log(error)
    }
})

app.get("/get-all-user-names", (req, res) => {
    console.log(req.token);

    jwt.verify(req.token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return res.status(403).json({ message: "token not verified" });
        } else {
            res.status(200).json({ message: "SUCCESSFUL", data: data });
        }
    })



    return res.status(200).json({ users: db });
})