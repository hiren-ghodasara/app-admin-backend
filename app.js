const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
// Allow requests from all origins
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post("/login", (req, res) => {
  // Assuming successful authentication
  const userId = "123456";

  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber = Math.random().toString();
    randomNumber = randomNumber.substring(2, randomNumber.length);
    res.cookie("cookieName", randomNumber, { maxAge: 900000, httpOnly: true });
    console.log("cookie created successfully");
  } else {
    // yes, cookie was already present
    console.log("cookie exists", cookie);
  }
  res.send("Login successful!");
});

app.get("/check", (req, res) => {
  console.log("req", req.cookies);
  res.send("Login successful!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
