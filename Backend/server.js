const express = require("express");
const app = express();
const cors = require("cors");
const collection = require("./mongo");

const corsOptions = {
    origin: ["https://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.post("/SignUp", async (req, res) => {
    try {
        const MakeUser = {
            email: req.body.email,
            password: req.body.password
        };
        await collection.insertMany([MakeUser]);
        res.status(200).send({ message: "User signed up successfully" });
    } catch (error) {
        res.status(500).send({ error: "Failed to sign up user" });
    }
});

app.post("/SignIn", async (req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        };

        await collection.findOne([user])
        res.status(200).send({ message: "success" });
    } catch (error) {
        res.status(500).send({ error: "Failed to sign in user" });
    }
})

app.listen(8000, () => {
    console.log("server running on port 8000");
});