// src/components/pages/exam/ManageQuestions.js
import React, { useState } from 'react';
import { CreateExam } from './CreateExam'; // Importing default export correctly
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./manageqestion.css"
const ManageQuestions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [qestionid, setQestionid] = useState('');
    const [password, setPassword] = useState('');
    const [timeInSeconds, setTimeInSeconds] = useState('');
    const [subject, setSubject] = useState('');

    const addQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    const handlesubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8000/createquestion", { getquestions: questions, qestionid, password, timeInSeconds, subject });
            console.log(response);
            if (response.status === 201) {
                navigate("/examlogin");
                setQuestions([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="manage-questions-section">
            <div className="container">
                <h1>Manage Questions</h1>
                <div className="row">
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            name="questionid"
                            placeholder="Enter question ID"
                            required
                            onChange={(e) => { setQestionid(e.target.value); }}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            name="subject-name"
                            placeholder="Enter subject name"
                            required
                            onChange={(e) => { setSubject(e.target.value); }}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="number"
                            className="form-control"
                            name="timeInSeconds"
                            placeholder="Enter Exam  Duration in seconds"
                            required
                            onChange={(e) => setTimeInSeconds(e.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            required
                            onChange={(e) => { setPassword(e.target.value); }}
                        />
                    </div>
                </div>
                <CreateExam addQuestion={addQuestion} />
                <div className="questions-list">
                    <h2>Questions List</h2>
                    <button className="btn btn-primary submit-button" onClick={handlesubmit}>Submit Question Paper</button>
                    <ul className="list-group">
                        {questions.map((q, index) => (
                            <li key={index} className="list-group-item">
                                <p>{q.question}</p>
                                <ul>
                                    {q.options.map((option, i) => (
                                        <li key={i} className={q.answer === i + 1 ? 'correct-answer' : ''}>
                                            {option} {q.answer === i + 1 ? '(Correct Answer)' : ''}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ManageQuestions;
