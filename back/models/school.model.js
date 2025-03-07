import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    },
  info: {
    type: String,
    required: true
    },
  image: {
    type: String,
    required: true
  }
}, {
    timestamps: true
});

const School = mongoose.model('School', schoolSchema);

export default School;