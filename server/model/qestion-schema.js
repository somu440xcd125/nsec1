import mongoose from "mongoose";

// Define schema for individual questions
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: Number,
        required: true,
        min: 1 // Assuming the answer index starts from 1
    }
});

// Define schema for question paper
const questionPaperSchema = new mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    questions: {
        type: [questionSchema],
        required: true
    },
    timeInSeconds: { // Add the timeInSeconds field here
        type: Number,
        required: true
    },
    subject: { // Add the timeInSeconds field here
        type: String,
        required: true
    },
});

// Define the model for question paper
const QuestionPaper = mongoose.model('QuestionPaper', questionPaperSchema);

export default QuestionPaper;
