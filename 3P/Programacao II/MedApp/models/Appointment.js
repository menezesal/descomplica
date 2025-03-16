import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
  date: {
    type: Date,
    required: [true, 'Appointment Data is required.']
  },
  doctorId: {
    type: String,
    required: [true, 'DoctorId is required.'],
    validate: {
      validator: function(v){
        const id = new mongoose.Type.ObjectId(v);
        return Doctor.exists({_id: id});
      },
      message: props => `Doctor ${props.value} not found`
    }
  },
  pacientId: {
    type: String,
    required: [true, 'PacientId is required.'],
    validate: {
      validator: function(v){
        const id = new mongoose.Type.ObjectId(v);
        return Pacient.exists({_id: id});
      },
      message: props => `Pacient ${props.value} not found`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }}
);

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;