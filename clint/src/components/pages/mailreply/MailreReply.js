import axios from "axios";
import "../contact/contact.css";

import React, { useState } from "react";

export const MailreReply = () => {
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
         
          <p>Reply</p>
        </header>
        <div className="row gy-4">
          
          <div className="col-lg-12">
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
                
                  <button type="submit" onClick={handleSubmit}>Send Reply</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
