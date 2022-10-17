const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config();
var cors = require('cors')
const connectMongo = require("./config/mongoose")
connectMongo.connect()
app.use(cors())
const port = process.env.PORT || 6000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/images')));

const user = require("./routes/user")
const post = require("./routes/post")

app.use('/user', user)
app.use('/post', post)

app.listen(port, "192.168.99.1", () => {
    console.log("You are listening to port ", port);
})