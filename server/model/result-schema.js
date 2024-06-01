import mongoose from "mongoose";
const { Schema } = mongoose;

const resultSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  questionid: {
    type: String,
    required: true,
  },
  
  score: {
    type: Number,
    required: true,
  },
  completionTime: {
    type: Date,
    default: Date.now,
  },   subject: { // Add the timeInSeconds field here
    type: String,
    required: true
},
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
