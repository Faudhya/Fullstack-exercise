const express = require("express");
const PORT = 2000;
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is my API");
});

const { authRouter, eventRouter } = require("./routers");
app.use("/auth", authRouter);
app.use("/event", eventRouter);

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true });
    console.log(`server running at port : ${PORT}`);
});
