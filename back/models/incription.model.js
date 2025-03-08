import mongoose from "mongoose";

const abcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    },
  lastname: {
    type: String,
    required: true
    },
  document: {
    type: Number,
    required: true
  },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const disSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
      },
    lastname: {
      type: String,
      required: true
      },
    document: {
      type: Number,
      required: true
    },
      email: {
          type: String,
          required: true
      },
      phone: {
          type: Number,
          required: true
      }
  }, {
      timestamps: true
  });

  const esSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
      },
    lastname: {
      type: String,
      required: true
      },
    document: {
      type: Number,
      required: true
    },
      email: {
          type: String,
          required: true
      },
      phone: {
          type: Number,
          required: true
      }
  }, {
      timestamps: true
  });

export const ABC = mongoose.model('ABC', abcSchema);
export const DIS = mongoose.model('DIS', disSchema);
export const ES = mongoose.model('ES', esSchema);