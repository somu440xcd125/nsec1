// src/components/pages/exam/CreateExam.js
import React, { useState } from 'react';
import "./createexam.css";

export const CreateExam = ({ addQuestion }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState(1);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addQuestion({ question, options, answer });
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer(1);
    };

    return (
        <section className="create-exam-section">
            <form className="create-exam-form" onSubmit={handleSubmit}>
                <div className="form-group"> 
                    <label className="form-label">Question:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                {options.map((option, index) => (
                    <div className="form-group" key={index}>
                        <label className="form-label">Option {index + 1}:</label>
                        <input
                            className="form-input"
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <div className="form-group">
                    <label className="form-label">Correct Answer:</label>
                    <select
                        className="form-select"
                        value={answer}
                        onChange={(e) => setAnswer(Number(e.target.value))}
                        required
                    >
                        {options.map((_, index) => (
                            <option key={index} value={index + 1}>
                                Option {index + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="submit-button" type="submit">Add Question</button>
            </form>
        </section>
    );
};

export default CreateExam;
