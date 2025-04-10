import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  document: {
    type: Number
  },
  sex: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  age: {
    type: Date
  },
  church: {
    type: String
  }
},
{
  timestamps: true,
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;