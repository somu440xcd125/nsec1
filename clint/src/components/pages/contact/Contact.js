import axios from "axios";
import "./contact.css";

import React, { useState } from "react";

export const Contact = () => {
  const [name,setNmae]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");


  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      
      const response=await axios.post("http://localhost:8000/contactreply",{name,email,subject,message})
      console.log(response)
    } catch (error) {
      console.log(error);
      
    }

  }



  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <a
                    href="https://maps.app.goo.gl/WJnurEtJyxrjyfN46"
                    className="text-info">
                    <i className="fas fa-location-dot fa-2x" />
                  </a>
                  <h3>Address</h3>
                  <p>
                    Garia,Ranabhutia
                    <br />
                    Kolkata, WB-700152
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <a href="tel:+916289674153" className="text-info">
                    <i className="fa-solid fa-phone mt-4 fa-2x" />
                  </a>
                  <h3>Call Us</h3>
                  <p>
                    +91 999 999 9999
                    <br />
                    +91 888 888 8888
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <a
                    href="mailto:musketeerspremierleague@gmail.com"
                    className="text-info"
                  >
                    <i className="fa-solid fa-envelope mt-4 fa-2x" />
                  </a>
                  <h3>Email Us</h3>
                  <p>
                    principal@nsec.ac.in

                    <br />
                    info@nsec.ac.in   </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="fas fa-clock" />
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Friday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    onChange={(e)=>{setNmae(e.target.value)}}
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    onChange={(e)=>{setEmail(e.target.value) }}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={(e)=>setSubject(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    defaultValue={""}
                    onChange={(e)=>setMessage(e.target.value)}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit" onClick={handleSubmit}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
