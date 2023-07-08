const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CamproundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CamproundSchema);
