import pacientRespository from "../repositories/PacientRepository.js";

const getAllPacients = async() => {
  return await pacientRespository.getAllPacients();
}

const getPacient = async(id) => {
  return await pacientRespository.getPacient(id);
}

const savePacient = async({ name, birthDate, email, phone }) => {
  return await pacientRespository.savePacient({ name, birthDate, email, phone });
}

const updatePacient = async(id, { name, birthDate, email, phone }) => {
  return await pacientRespository.updatePacient(id, { name, birthDate, email, phone });
}

const deletePacient = async(id) => {
  return await pacientRespository.deletePacient(id);
}

const pacientService = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient
}


export default pacientService;