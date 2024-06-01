import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const username = location.state?.username || "";

    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/resetpassword', {
                password: password,
                confirmPassword: confirmpassword,
                username: username
            });

            if (response.status === 200) {
                navigate('/login'); // Redirect to login page on successful password reset
            } else {
                setErrorMessage("Password reset failed. Please try again.");
            }

        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };


        useEffect(() => {
            if (!username) {
                navigate('/login'); // Redirect to login page if username is not available
            }
        }, [username, navigate]);

  return (
    <>
      <section id="register" className="register">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Reset Password</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 offset-md-3 mt-2 p-4">
            <form className="register-form">
              <div className="row gy-4">
                <div className="col-md-12 ">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter New password"
                    required
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmpassword"
                    placeholder="Enter Confirm password"
                    onChange={(e) => { setConfirmpassword(e.target.value) }}

                    required
                  />
                </div>
                
                
                <div className="col-md-12 text-center">
                
                  <button type="submit" onClick={handleSubmit} >Submit</button>
                </div>
     
              </div>
            </form>
          </div>
        </div>
 
      </div>
    </section>
    
    </>
  )
}
