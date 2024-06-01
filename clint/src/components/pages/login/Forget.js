import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import axios from 'axios';

const Forget = () => {
    const navigate=useNavigate(); 


    const [username, setUsername] = useState("");
    const [otp, setOtp] = useState("");
    const [verificationMessage, setVerificationMessage] = useState("");
    const [verificationOtpMessage, setVerificationOtpMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/forget', { username });
            // Handle response if needed

            console.log(response); // Log response data
            if (response.data.message === "Password reset OTP sent") {
                setVerificationMessage("Password reset OTP sent. Check your email.");
            }
        
        } catch (error) {
            // Handle error
            console.error("Error:", error);
        }
    };


    
    const handleVerify = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/forget', { username, otp });
            // Handle response if needed
            // console.log(response.data.message); // Log response data
            if (response.status==200) {
                setVerificationOtpMessage(response.data.message);
                navigate("/newpassword", { state: { username } });                
            }
            else setVerificationOtpMessage(response.data.message);
        } catch (error) {
            // Handle error
            console.error("Error:", error);
        }
    };



    return (
        <section id="login" className="login">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    <p>Forgot password</p>
                </header>
                <div className="row gy-4">
                    <div className="col-lg-6 offset-md-3 mt-2 p-4">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="row gy-4">
                                <div className="col-md-12 ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="username"
                                        placeholder="Enter Email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit">Reset Password</button>
                                </div>
                                {verificationMessage && <p>{verificationMessage}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            
                <div className="row gy-4">
                    <div className="col-lg-6 offset-md-3 mt-2 p-4">
                        <form className="login-form" onSubmit={handleVerify}>
                            <div className="row gy-4">
                                <div className="col-md-12 ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="otp"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type="submit">Verify OTP</button>
                                </div>
                            </div>
                        </form>
                        <br/><br/><br/>{verificationOtpMessage && <p>{verificationOtpMessage}</p>}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Forget;
