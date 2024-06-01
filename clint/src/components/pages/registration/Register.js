import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";

import React, { useState } from "react";


export const Register = () => {
   
   
   const navigate=useNavigate();


  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [year,setYear]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setconfirmPassword]=useState("");
  const [roll,srtRoll]=useState("");
  const [section,setSection]=useState("");
  const [error, setError] = useState(null);
  const [estatus,setEstatus]=useState();
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit function called");
    
    try {
      const response = await axios.post('http://localhost:8000/signup', {
        name,
        phone,
        year,
        username,
        password,
        confirmpassword,
        roll,
        section
        
    });
    if(response.status===200){
      navigate("/login");
    }
 
    setEstatus(response.data.message);
      console.log(response.data.message);
      
    } catch (error) {
      console.error("Error occurred:", error);
      if (error.response) {
        setEstatus(error.response.data.message);
      } else {
        setEstatus("Something went wrong. Please try again later.");
      }
         
      } 
  };


  







  return (
    <section id="register" className="register">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Registration</h2>
          <p>Become a Member</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 offset-md-3 mt-2 p-4">
            <form className="register-form">
              <div className="row gy-4">
                <div className="col-md-12 ">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Full Name"
                    required
                    onChange={(e) => { setName(e.target.value) }}
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Phone Number"
                    onChange={(e) => { setPhone(e.target.value) }}

                    required
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="number"
                    className="form-control"
                    name="year"
                    placeholder="Enter Year"
                    max="4"
                    min="1"
                    
                    onChange={(e) => { setYear(e.target.value) }}

                    required
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="number"
                    className="form-control"
                    name="roll"
                    placeholder="Enter class roll"
                    max="4"
                    min="1"
                    
                    onChange={(e) => { srtRoll(e.target.value) }}

                    required
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="text"
                    className="form-control"
                    name="section"
                    placeholder="Enter section"
                 
                    
                    onChange={(e) => { setSection(e.target.value) }}

                    required
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    placeholder="Enter Email"
                    required
                    onChange={(e) => { setUsername(e.target.value) }}

                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => { setPassword(e.target.value) }}

                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    name="cPassword"
                    placeholder="Enter Confirm Password"
                    required
                    onChange={(e) => { setconfirmPassword(e.target.value) }}

                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="col-md-12 text-center">
                  Already a member? <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {estatus && (
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <p className="error-message text-center text-danger">{estatus}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
