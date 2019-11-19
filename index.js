const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const Router = express.Router()
const Controller = require("./controllers/new")

app.use(cors());
app.use(bodyParser.json());
// app.use('/details/', Router)
app.use('/new/', Controller)
mongoose.connect('mongodb://127.0.0.1:27017/reviews', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
Router.get("/", (req,res) => {
    if (err) {
        console.log(err)
    }else {
        res.json(reviews)
    }
})
app.listen(3000, () => console.log("running on 3K"));
