const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true },
  contacts: [
    {
      name: { type: String, required: true },
      phone: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("SOS", sosSchema);