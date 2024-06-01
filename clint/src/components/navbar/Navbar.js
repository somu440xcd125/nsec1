import { NavLink } from "react-router-dom";
import "./navbar.css";
import {useAuth} from "../../context/hooks/auth/useAuth"
import { useDispatch } from 'react-redux';
// import { logoutUser } from "../../context/store/slice/auuthSlice"; 
import { logoutUser } from "../../context/store/slices/auuthSlice";
import { useSelector } from "react-redux";




import React from "react";

export const Navbar = () => {
  const user = useSelector(state => state.auth.currentUser);
  const auth=useAuth();
  // console.log(auth.username);
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(logoutUser())
  }



  
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink to="" className="nav-link scrollto">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="faculty" className="nav-link scrollto">
            Faculty
          </NavLink>
        </li>
        <li>
          <NavLink to="examlogin" className="nav-link scrollto">
            Exam
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="academics" className="nav-link scrollto">
            Academics
          </NavLink> */}
        </li>
        <li>
          <NavLink to="notice" className="nav-link scrollto">
            Notice
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink  className="nav-link scrollto">
            Student Corner
            <i className="fa fa-chevron-down" />
          </NavLink>
          <ul>
        
         
          { user.role=="admin"?( 
            ""
          
        ):<NavLink to="studentprofile" className="nav-link scrollto">
          Student
          </NavLink> }
            <li>
              <NavLink to="sarchresult" className="nav-link scrollto">
                Result
              </NavLink>
            </li>
           
          </ul>
        </li>
       
        <li>
          <NavLink to="contact" className="nav-link scrollto">
            Contact
          </NavLink>
        </li>
      { user.role=="admin"?( <li>
          <NavLink to="admin" className="nav-link scrollto">
            admin
          </NavLink>
        </li>):"" }
        <li>
          {auth.isAuth? <NavLink to="login" onClick={handleLogout} className="getstarted scrollto">
            logout
          </NavLink>:
          <NavLink to="login" className="getstarted scrollto">
            Login
          </NavLink>}
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  );
};
