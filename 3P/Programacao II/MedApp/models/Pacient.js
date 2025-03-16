import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Pacient name is required.']
  },
  birthDate: {
    type: Date,
    required: [true, 'Birth date is required.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.']
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

const pacient = mongoose.model('pacient', pacientSchema);
export default pacient;