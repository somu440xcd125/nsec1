import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ExamLogin = () => {
    const navigate = useNavigate();
    const [questionid, setQuestionid] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/examlogin", {
                questionid, // Make sure this matches the backend (lowercase 'q')
                username,
                name,
                password
            });
            console.log(response);
            if (response.status === 200) { // Corrected to check for status 200
                navigate("/exam",{ state: { username,questionid }}); // Corrected path
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section id="login" className="login">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    <h2>Exam Login</h2>
                </header>
                <div className="row gy-4">
                    <div className="col-lg-6 offset-md-3 mt-2 p-4">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="row gy-4">
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter Email"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="questionid" // Matches the backend
                                        placeholder="Enter Exam ID"
                                        required
                                        onChange={(e) => setQuestionid(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Exam Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
