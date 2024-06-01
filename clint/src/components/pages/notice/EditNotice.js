import React, { useEffect, useState } from 'react'
import axios from "axios";
// import { Navigate, useNavigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export const EditNotice = () => {


  const [title, setTitle] = useState("");
  const [noticeDescription, setNoticeDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

const navigate=useNavigate();
const location = useLocation();
const {noticeId} = location.state;
useEffect(()=>{
  getNotice();
  
},[])
const getNotice=async()=>{
  try {
    const response = await axios.post('http://localhost:8000/editnotice', { noticeId });
    setTitle(response.data.title);
    setNoticeDescription(response.data.noticeDescription);
    // console.log(response)

    
  } catch (error) {
    console.error("Error occurred:", error);
    
  }
}

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      
        
      const response = await axios.post('http://localhost:8000/updatenotice', { noticeId,title, noticeDescription, fromDate ,toDate });

       
       if(response.status==200){
        navigate("/notice")
       }

    }
    catch(error){
        console.error("Error occurred:", error);

    }

  }



  return (
    <>
      <section>
        <section id="login" className="login">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <p>Create Notice</p>
            </header>
            <div className="row gy-4">
              <div className="col-lg-6 offset-md-3 mt-2 p-4">
                <form className="login-form"  >
                  <div className="row gy-4">
                    <div className="col-md-12">
                    <label>Notice Header</label>
                      <input
                        type="text"
                        className="form-control"
                        name="notice-header"
                        placeholder="......"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <label>Notice Description</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        name="notice-description"
                        placeholder="....."
                        required
                        value={noticeDescription}
                        onChange={(e) => setNoticeDescription(e.target.value)}
                      />
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <label>From Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="from-date"
                            required
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>To Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="to-date"
                            required
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                          />
                        </div>
                      </div>

                    </div>
                    <div className="col-md-12">
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}
