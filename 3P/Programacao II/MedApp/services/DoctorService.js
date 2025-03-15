import doctorRespository from "../repositories/DoctorRepository.js";

const getAllDoctors = async() => {
  return await doctorRespository.getAllDoctors();
}

const getDoctor = async(id) => {
  return await doctorRespository.getDoctor(id);
}

const saveDoctor = async({ name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
  return await doctorRespository.saveDoctor({ name, login, password, medicalSpecialty, medicalRegistration, email, phone });
}

const updateDoctor = async(id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
  return await doctorRespository,updateDoctor(id, { name, login, password, medicalSpecialty, medicalRegistration, email, phone });
}

const deleteDoctor = async(id) => {
  return await doctorRespository,deleteDoctor(id);
}

const doctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
//  getDoctorByLogin
}


export default doctorService;