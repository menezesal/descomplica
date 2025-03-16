import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema ({
  date: {
      type: Date
  },
  appointmentId: {
      type: String,
      required: [true, 'Appointment ID is required.'],
      validate: {
        validator: function(v){
          const id = new mongoose.Type.ObjectId(v);
          return Appointment.exists({_id: id});
        },
        message: props => `Appointment ${props.value} not found`
      }
  },
  medicine: {
      type: String,
      required: [true, 'Medicine is required.']
  },
  dosage: {
      type: String,
      required: [true, 'Dosage is required.']
  },
  instructions: {
      type: String
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
  file: {
      type: String
  }
}
);

const prescription = mongoose.model('prescription', prescriptionSchema);
export default prescription;