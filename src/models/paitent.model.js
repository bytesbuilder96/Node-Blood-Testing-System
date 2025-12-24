// import mongoose from "mongoose";

// const paitentSchema = new mongoose.Schema(
//   {
//     paitentName: {
//       type: String,
//     },
//     father_husb: {
//       type: String,
//     },
//     barcode: {
//       type: String,
//       unique: true,
//       default: () => `PN-${Date.now()}`,
//     },

//     nic: {
//       type: Number,
//     },
//     age: {
//       type: String,
//     },
//     sex: {
//       type: String,
//       enum: ["Male", "Female"],
//     },
//     phone: {
//       type: String,
//     },
//     address: {
//       type: String,
//     },
//     drId: {
//       type: String,
//     },
//     drName: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// export const Paitent = mongoose.model("Paitent", paitentSchema);
import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  testID: { type: String, required: true },
  testDesc: { type: String, required: true },
  charges: { type: Number, required: true },
  carryOut: { type: Boolean, default: false },
  report: { type: String }, // maybe a file path or URL
});

const patientSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  time: { type: String },

  patientInfo: {
    name: { type: String, required: true },
    fatherOrHusband: { type: String },
    nic: { type: String, unique: true },
    age: { type: Number },
    sex: { type: String, enum: ["Male", "Female", "Other"] },
    telephone: { type: String },
    address: { type: String },
  },

  referredBy: {
    doctorID: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    doctorName: { type: String },
  },

  tests: [testSchema], // Nested array of tests

  specimen: {
    type: {
      type: String,
      enum: ["Taken in Lab", "Home Collection"],
      default: "Taken in Lab",
    },
  },

  billing: {
    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    netAmount: { type: Number, default: 0 },
    paid: { type: Number, default: 0 },
    due: { type: Number, default: 0 },
  },
});

export const Patient = mongoose.model("Patient", patientSchema);
