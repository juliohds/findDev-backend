const mongoose = require("mongoose")/


const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
  }
})


module.exports mongoose.