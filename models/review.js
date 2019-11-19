const mongoose = require("../db/connection");

const ReviewSchema = new mongoose.Schema({
  reviews: String
});

const Reviews = mongoose.model("Reviews", ReviewSchema);

module.exports = Reviews;