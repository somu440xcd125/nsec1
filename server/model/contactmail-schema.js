import mongoose from "mongoose";
const { Schema } = mongoose;

const mailSchema = new Schema({
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  
  message: {
    type: String,
    required: true,
  },
  
});

const Mail = mongoose.model('Mail', mailSchema);
export default Mail;
