import  Doctor  from "../models/Doctor.js";

const getAllDoctors = async() => {
  return await Doctor.find();
}

const getDoctor = async(id) => {
  try {
    return await Doctor.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

const saveDoctor = async({ name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
  try {
    const doctor = new Doctor({ name, login, password, medicalSpecialty, medicalRegistration, email, phone });
    return await doctor.save();
  } catch (error) {
    throw new Error(error);
  }
}

const updateDoctor = async(id,{ name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
  try {
    return await Doctor.findByIdAndUpdate(id,{ name, login, password, medicalSpecialty, medicalRegistration, email, phone }, {new: true});
  } catch (error) {
    throw new Error(error);
  }
}

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdUpdate(id);
  } catch (error) {
    throw new Error(error);
  }
}

const DoctorRespository = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor
}


export default DoctorRespository;