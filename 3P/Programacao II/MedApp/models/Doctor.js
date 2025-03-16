import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Doctor name is required.']
  },
  login: {
    type: String,
    required: [true, 'Login is required.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  },
  medicalSpecialty: {
    type: String,
    required: [true, 'Medical specialty is required.']
  },
  medicalRegistration: {
    type: String,
    required: [true, 'Medical registration is required.'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true
  },
  phone: {
    type: String,
    required: [true, 'phone is required.'],
    validate: {
      validator: function (v) {
        return /\d{2}9\d{8}/.test(v);
      },
      message: props => `${props.value} This is not a valid phone value. Please use de following format XX912345678`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }}
);

const doctor = mongoose.model('Doctor', doctorSchema);
export default doctor;