import React, { useEffect, useState } from "react";
// import banner1 from "../../../assets/images/landing/75th-4.png";
import banner2 from "../../../assets/images/landing/75th-5.png";
import logo from "../../../assets/images/logo/logo.png"
import "./landingPage.css";
import axios from "axios";




export const LandingPage = () => {
  const [notices, setNotices] = useState([]);
  // console.log(notices)
    useEffect(() => {
      fetchNotices();
    }, []);
  
    // Function to fetch notices from the backend
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getnotice');
        console.log(response)
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
  



  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(!flag);
    }, 3000);
    return () => clearInterval(interval);
  }, [flag]);
  return (
    <div>
      <section id="hero" className="hero align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 data-aos="fade-up" id="homeh3">
              Welcome to the Computer Science Department of Netaji Subhash Engineering College
              </h3>
              <h5 className="fade-up" id="homeh5">
                Where Innovation meets Computation and you get to code your future.
                </h5>
              
              <div data-aos="fade-up" data-aos-delay={600}>
                <div className="text-center text-lg-start">
                  <a
                    href="/login"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay={200}>
              {flag ? (
                <img src={logo} className="img-fluid "id="loghome" alt="banner1" />
              ) : (
                <img src={logo} className="img-fluid" id="loghome" alt="banner2" />
              )}
            </div>
          </div>
        </div>
  
      </section>
    </div>
  );
};
