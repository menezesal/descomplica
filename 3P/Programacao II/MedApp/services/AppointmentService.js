import appointmentRespository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async() => {
  return await appointmentRespository.getAllAppointments();
}

const getAppointment = async(id) => {
  return await appointmentRespository.getAppointment(id);
}

const saveAppointment = async({date, doctorId, pacientId}) => {
  return await appointmentRespository.saveAppointment({date, doctorId, pacientId});
}

const updateAppointment = async(id, {date, doctorId, pacientId}) => {
  return await appointmentRespository.updateAppointment(id, {date, doctorId, pacientId});
}

const deleteAppointment = async(id) => {
  return await appointmentRespository.deleteAppointment(id);
}

const appointmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment
}


export default appointmentService;