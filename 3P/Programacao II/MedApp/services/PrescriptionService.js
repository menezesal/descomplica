import prescriptionRespository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async() => {
  return await prescriptionRespository.getAllPrescriptions();
}

const getPrescription = async(id) => {
  return await prescriptionRespository.getPrescription(id);
}

const savePrescription = async({ date, appointmentId, medicine, dosage, instructions }) => {
  return await prescriptionRespository.savePrescription({ date, appointmentId, medicine, dosage, instructions });
}

const updatePrescription = async(id, { date, appointmentId, medicine, dosage, instructions }) => {
  return await prescriptionRespository.updatePrescription(id, { date, appointmentId, medicine, dosage, instructions });
}

const deletePrescription = async(id) => {
  return await prescriptionRespository.deletePrescription(id);
}

const prescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription,
//  generatePrescriptionFile
}


export default prescriptionService;