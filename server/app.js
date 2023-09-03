const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's URL
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
