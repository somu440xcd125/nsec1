import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { authenticateSignup, authenticateLogin } from '../../../service/api';
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../../context/store/slices/auuthSlice";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorheading, setErrorheading] = useState(null);
  const [role, setRole] = useState("member");

  //check user acces in any page 
  const user = useSelector(state => state.auth.currentUser)
  // console.log(user.username);
  // console.log(user.role);
  const dispatch = useDispatch();

  useEffect(() => {
    //  console.log(user.username)
    if (user.username != null) {
      navigate("/");
    } else {
      // console.log("hi")
      navigate("/login");
    }
  }, [user.username])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Handle submit function called");

    try {
      const response = await axios.post('http://localhost:8000/login', { username, password, role });
      // console.log(response.data.user.username)
      if (response.status === 200) {

        dispatch(loginUser(response.data.user));
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorheading(error.response.data.message);
    }
  };

  return (
    <> {/* Wrap your component with BrowserRouter */}
      <section id="login" className="login">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Login</h2>
            <p>Member Login</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-6 offset-md-3 mt-2 p-4">
              <form className="login-form">
                <div className="row gy-4">
                  <div className="col-md-12 ">
                    <input
                      type="username"
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
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                  </div>
                </div>
                <div className="col-md-12 text-right"> {/* Add the text-right class here */}
                  <a href="/forget">Forgot password</a>
                </div><br />
                <div className="col-md-12 text-center">
                  Not a member yet? <a href="/register">Join Us</a><br /> {/* Use a regular anchor tag for navigation */}
                </div>
                <br></br>
                <div className="col-md-12 text-center">
                  {errorheading ? <p className="error">{errorheading}</p> : ""}

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
