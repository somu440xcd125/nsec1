import React from "react"
import { blog } from "./dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <section>

      <footer>
        <div className='container p-5'>
          <div className='box logo'>
            <h1>NSEC</h1>
            <span>BEST B-TECH AND MANAGEMENT COLLEGE IN KOLKATA</span>
            <p>“One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives  -- -Netaji Subhas Chandra Bose”</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
             
          
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
            
            
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
     
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 PACHPOTA, KOLKATA, W.B, INDIA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Team FAKU
        </p>
      </div>
      </section>
    </>
  )
}

export default Footer
