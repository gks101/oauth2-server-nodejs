const express = require("express")
const dotenv = require("dotenv");
const authRoute = require("./routes/authorization");
const tokenRoute = require("./routes/token");
const consentRoute = require("./routes/consent");
const errorRoute = require("./routes/error");
const userinfoRoute = require("./routes/userinfo");
const  authenticationRoute = require("./routes/authentication");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
dotenv.config({path: "./.env"});
//Routes
app.use("/authentication", authenticationRoute);
app.use("/oauth2", authRoute);
app.use("/oauth2", tokenRoute);
app.use("/oauth2", consentRoute);
app.use("/oauth2", errorRoute);
app.use("/oauth2", userinfoRoute);

app.get("/", (req, res) => {
    res.end("Hello World");
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});