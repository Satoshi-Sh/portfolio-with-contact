const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const { validateContact } = require("./validators/contact.validator");

const myEmail = process.env["EMAIL_ADDRESS"];
const myPass = process.env["PASSWORD"];

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: myEmail,
    pass: myPass,
  },
});

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
  const { error } = validateContact({
    name,
    email,
    message,
  });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const mailOptions = {
    from: myEmail,
    to: email,
    subject: "Message from Contact Form",
    text: `Thanks for contacting me through my website. I will reach you back soon.\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\n
    Satoshi Shirosaka`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent successfully:", info.response);
      res.json({ message: "Email was sent successfully." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
