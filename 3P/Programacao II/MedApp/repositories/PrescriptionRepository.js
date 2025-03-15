import  Prescription  from "../models/Prescription.js";

const getAllPrescriptions = async() => {
  return await Prescription.find();
}

const getPrescription = async(id) => {
  try {
    return await Prescription.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

const savePrescription = async({ date, appointmentId, medicine, dosage, instructions }) => {
  try {
    const Prescription = new Prescription({ date, appointmentId, medicine, dosage, instructions });
    return await Prescription.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updatePrescription = async(id,{ date, appointmentId, medicine, dosage, instructions }) => {
  try {
    return await Prescription.findByIdUpdate(id,{ date, appointmentId, medicine, dosage, instructions }, {new: true});
  } catch (error) {
    throw new Error(error);
  }
}

const deletePrescription = async (id) => {
  try {
    return await Prescription.findByIdUpdate(id);
  } catch (error) {
    throw new Error(error);
  }
}

const PrescriptionRespository = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription
}


export default PrescriptionRespository;