// import { Patient } from "../models/paitent.model.js";
// export const createPaitent = async (req, res) => {
//   try {
//     const { paitentName, father_husb, age, sex, phone, address, drId, drName } =
//       req.body;

//     // validation
//     if (!paitentName || !father_husb || !age || !sex) {
//       return res.status(400).json({
//         success: false,
//         message: "Required fields are missing",
//       });
//     }

//     const paiten = await Paitent.create({
//       paitentName,
//       father_husb,
//       age,
//       sex,
//       phone,
//       address,
//       drId,
//       drName,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "✓ Patient created successfully",
//       data: paiten,
//     });
//   } catch (error) {
//     console.error("Patient create error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Patient not created",
//     });
//   }
// };
//.............................................................................

import { Patient } from "../models/paitent.model.js";

// Create a new patient
export const createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single patient by ID
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a patient by ID
export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a patient by ID
export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
